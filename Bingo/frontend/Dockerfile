FROM node:21

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN ["npm", "install"]

ENV PORT=3000

USER node
CMD ["npm", "start"]
