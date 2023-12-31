FROM node:16

WORKDIR /jgen

# Copy the necessary files
COPY . .

# Install dependencies
RUN yarn install

# Generate Language Files
RUN yarn run langium:generate

# Build Extension
RUN yarn run build

# Set the entry point
ENTRYPOINT ["./bin/cli"]

