import { LambdaClient } from '@aws-sdk/client-lambda';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';

const IDENTITY_POOL_ID = import.meta.env.VITE_IDENTITY_POOL_ID;
const REGION = import.meta.env.VITE_REGION;

const lambdaClient = new LambdaClient({
	region: REGION,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({ region: REGION }),
		identityPoolId: IDENTITY_POOL_ID,
	}),
});

export { lambdaClient };