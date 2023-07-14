module.exports = {
  name: 'users',
  exposes: {
    './UsersModule': 'apps/users/src/app/remote-entry/entry.module.ts',
  },
};
