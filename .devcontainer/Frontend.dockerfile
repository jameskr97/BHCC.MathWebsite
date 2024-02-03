FROM node:21

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://bun.sh/install.sh | bash
RUN mkdir /workspace
