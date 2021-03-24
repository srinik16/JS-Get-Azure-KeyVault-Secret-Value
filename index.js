const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

async function main() {
  // - DefaultAzureCredential expects the following three environment variables.
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application
  console.log("Load Credential");
      const credential = new DefaultAzureCredential();
      const url = "https://yourazuresecretkey.vault.azure.net/";
  console.log("Load SecretClient");
      const client = new SecretClient(url, credential);
  console.log("Get secret Password");
  // Read the secret using the secret name
      const secretName = `serviceaccpwd`;
      const secret = await client.getSecret(secretName);
  console.log("Display secret password: ", secret.value);
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});