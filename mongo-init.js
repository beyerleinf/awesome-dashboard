db.createUser({
  user: 'dbUser',
  pwd: 'SecurePassword',
  roles: [
    {
      role: 'readWrite',
      db: 'AwesomeDashboard',
    },
  ],
});
