# Shared

Types:

- <code><a href="./src/resources/shared.ts">Analytics</a></code>
- <code><a href="./src/resources/shared.ts">Deployment</a></code>
- <code><a href="./src/resources/shared.ts">Domain</a></code>
- <code><a href="./src/resources/shared.ts">KvDatabase</a></code>
- <code><a href="./src/resources/shared.ts">Project</a></code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>

Methods:

- <code title="get /organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationId) -> Organization</code>

## Analytics

Methods:

- <code title="get /organizations/{organizationId}/analytics">client.organizations.analytics.<a href="./src/resources/organizations/analytics.ts">get</a>(organizationId, { ...params }) -> Analytics</code>

## Projects

Types:

- <code><a href="./src/resources/organizations/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /organizations/{organizationId}/projects">client.organizations.projects.<a href="./src/resources/organizations/projects.ts">create</a>(organizationId, { ...params }) -> Project</code>
- <code title="get /organizations/{organizationId}/projects">client.organizations.projects.<a href="./src/resources/organizations/projects.ts">list</a>(organizationId, { ...params }) -> ProjectListResponse</code>

## Databases

Types:

- <code><a href="./src/resources/organizations/databases.ts">DatabaseListResponse</a></code>

Methods:

- <code title="post /organizations/{organizationId}/databases">client.organizations.databases.<a href="./src/resources/organizations/databases.ts">create</a>(organizationId, { ...params }) -> KvDatabase</code>
- <code title="get /organizations/{organizationId}/databases">client.organizations.databases.<a href="./src/resources/organizations/databases.ts">list</a>(organizationId, { ...params }) -> DatabaseListResponse</code>

## Domains

Types:

- <code><a href="./src/resources/organizations/domains.ts">DomainListResponse</a></code>

Methods:

- <code title="post /organizations/{organizationId}/domains">client.organizations.domains.<a href="./src/resources/organizations/domains.ts">create</a>(organizationId, { ...params }) -> Domain</code>
- <code title="get /organizations/{organizationId}/domains">client.organizations.domains.<a href="./src/resources/organizations/domains.ts">list</a>(organizationId, { ...params }) -> DomainListResponse</code>

# Databases

Methods:

- <code title="patch /databases/{databaseId}">client.databases.<a href="./src/resources/databases.ts">update</a>(databaseId, { ...params }) -> KvDatabase</code>

# Projects

Methods:

- <code title="patch /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectId, { ...params }) -> Project</code>
- <code title="delete /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectId) -> void</code>
- <code title="get /projects/{projectId}">client.projects.<a href="./src/resources/projects/projects.ts">get</a>(projectId) -> Project</code>

## Analytics

Methods:

- <code title="get /projects/{projectId}/analytics">client.projects.analytics.<a href="./src/resources/projects/analytics.ts">get</a>(projectId, { ...params }) -> Analytics</code>

## Deployments

Types:

- <code><a href="./src/resources/projects/deployments.ts">DeploymentListResponse</a></code>

Methods:

- <code title="post /projects/{projectId}/deployments">client.projects.deployments.<a href="./src/resources/projects/deployments.ts">create</a>(projectId, { ...params }) -> Deployment</code>
- <code title="get /projects/{projectId}/deployments">client.projects.deployments.<a href="./src/resources/projects/deployments.ts">list</a>(projectId, { ...params }) -> DeploymentListResponse</code>

# Deployments

Methods:

- <code title="delete /deployments/{deploymentId}">client.deployments.<a href="./src/resources/deployments/deployments.ts">delete</a>(deploymentId) -> void</code>
- <code title="get /deployments/{deploymentId}">client.deployments.<a href="./src/resources/deployments/deployments.ts">get</a>(deploymentId) -> Deployment</code>
- <code title="post /deployments/{deploymentId}/redeploy">client.deployments.<a href="./src/resources/deployments/deployments.ts">redeploy</a>(deploymentId, { ...params }) -> Deployment</code>

## BuildLogs

Types:

- <code><a href="./src/resources/deployments/build-logs.ts">BuildLogGetResponse</a></code>

Methods:

- <code title="get /deployments/{deploymentId}/build_logs">client.deployments.buildLogs.<a href="./src/resources/deployments/build-logs.ts">get</a>(deploymentId) -> BuildLogGetResponse</code>

## AppLogs

Types:

- <code><a href="./src/resources/deployments/app-logs.ts">AppLogGetResponse</a></code>

Methods:

- <code title="get /deployments/{deploymentId}/app_logs">client.deployments.appLogs.<a href="./src/resources/deployments/app-logs.ts">get</a>(deploymentId, { ...params }) -> AppLogGetResponse</code>

# Domains

Methods:

- <code title="patch /domains/{domainId}">client.domains.<a href="./src/resources/domains/domains.ts">update</a>(domainId, { ...params }) -> void</code>
- <code title="delete /domains/{domainId}">client.domains.<a href="./src/resources/domains/domains.ts">delete</a>(domainId) -> void</code>
- <code title="get /domains/{domainId}">client.domains.<a href="./src/resources/domains/domains.ts">get</a>(domainId) -> Domain</code>
- <code title="post /domains/{domainId}/verify">client.domains.<a href="./src/resources/domains/domains.ts">verify</a>(domainId) -> void</code>

## Certificates

Methods:

- <code title="post /domains/{domainId}/certificates">client.domains.certificates.<a href="./src/resources/domains/certificates.ts">create</a>(domainId, { ...params }) -> void</code>
- <code title="post /domains/{domainId}/certificates/provision">client.domains.certificates.<a href="./src/resources/domains/certificates.ts">provision</a>(domainId) -> void</code>
