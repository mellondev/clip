import { BaseNodeComponent } from '@jsplumbtoolkit/browser-ui-angular';

export abstract class QuestionNodeComponent extends BaseNodeComponent  {
  abstract questionType: string;
}

export class BaseQuestionComponent  extends QuestionNodeComponent {
  questionType = '';
  // questionText: string | null = null;
  typeLabel = '';

  startEditing() {
    console.log(this.obj);
    const qText = this._el.getElementsByClassName('q-text')[0] as HTMLElement;
    qText.classList.add('question-text-editing');
    qText.contentEditable = 'true';
    qText.focus();


    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(qText);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  stopEditing() {
    const qText = this._el.getElementsByClassName('q-text')[0] as HTMLElement;
    qText.classList.remove('question-text-editing');
    qText.contentEditable = 'false';
    window.getSelection()?.removeAllRanges();
    // this.questionText = qText.innerText;
    this.obj['title'] = qText.innerText;
    console.log(this.obj);
    // console.log(this.questionText)
    this.updateNode(this.obj);
  }
}
