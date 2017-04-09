
/*
  FILENAME:
  DESCRIPTION:
  NOTES:
*/

module.exports = {
  application: {
    name: 'Art Gallery',
    version: '0.1.0',
    baseUrl: 'http://localhost:9999',
    timeout: 5000,
    endpoints: {
      sessionsCreate: {
        label: 'Creates Session',
        description: 'Creates Session if User Exists in DB, otherwise, prompts to register',
        method: 'POST',
        uri: '/sessions/create',
      },
      sessionsRegister: {
        label: 'Register User',
        method: 'POST',
        uri: '/sessions/register',
      },
    },
  },
};
