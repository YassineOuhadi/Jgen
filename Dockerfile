# Step 1: Build Stage
FROM node:16.13.0 AS build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run langium:generate
RUN yarn run build
ENTRYPOINT ["./bin/cli"]


# Step 2: Final Stage
FROM node:16.13.0
WORKDIR /jgen
COPY --from=build /app/dist ./dist

# Set non-root user
USER node

# Set NODE_ENV to production
ENV NODE_ENV=production

# Install production dependencies
RUN yarn install --production
