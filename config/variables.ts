   process.loadEnvFile()
    
    const { DOJO_USER_MEMBER_EMAIL, DOJO_USER_MEMBER_PASSWORD } = process.env;

    if (!DOJO_USER_MEMBER_EMAIL || !DOJO_USER_MEMBER_PASSWORD) {
      throw new Error('Environment variables DOJO_USER_MEMBER_EMAIL and DOJO_USER_MEMBER_PASSWORD must be set.');
    }

    console.log(`DOJO_USER_MEMBER_EMAIL: ${DOJO_USER_MEMBER_EMAIL}`);
    console.log(`DOJO_USER_MEMBER_PASSWORD: ${DOJO_USER_MEMBER_PASSWORD}`);

    const variables = {
      DOJO_USER_MEMBER_EMAIL: DOJO_USER_MEMBER_EMAIL || '',
      DOJO_USER_MEMBER_PASSWORD: DOJO_USER_MEMBER_PASSWORD || '',
    };

    export default variables;
