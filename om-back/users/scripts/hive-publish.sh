npx hive schema:publish \
  --service="${APP_NAME} \
  --url="${URL}" \
  --registry.accessToken="${HIVE_TOKEN}" \
  src/schema.graphql