FROM node:10.15-alpine as builder

# set working directory
RUN mkdir /opt/ifood
WORKDIR /opt/ifood

# set api gateway address
ARG IP_ADDR
ENV IP_ADDR=${IP_ADDR}

# add `node_modules/.bin` to $PATH
ENV PATH /opt/ifood/node_modules/.bin:$PATH

# copy files to build the project
COPY . .
RUN npm i --silent -g webpack
RUN npm i --silent -g cross-env
RUN npm i --silent
RUN IP_ADDR="${IP_ADDR}" && npm run build

FROM nginx:1.15.8-alpine

COPY --from=builder /opt/ifood/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]