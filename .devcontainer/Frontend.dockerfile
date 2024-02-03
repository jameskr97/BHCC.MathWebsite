FROM node:21

RUN apt-get update && apt-get install -y \
    curl \
    coreutils \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://bun.sh/install.sh | bash
RUN git clone https://github.com/jameskr97/BHCC.MathWebsite.git /workspace

CMD ["sleep", "infinity"]