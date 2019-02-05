FROM node:10.15-alpine as builder

# set working directory
RUN mkdir /opt/ifood
WORKDIR /opt/ifood

# add `node_modules/.bin` to $PATH
ENV PATH /opt/ifood/node_modules/.bin:$PATH

## TODO how to do this in the nginx container?
COPY ./nginx/create-env.sh .
RUN sh create-env.sh .

# copy files to build the project
COPY . .

RUN npm i --silent
RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=builder /opt/ifood/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]