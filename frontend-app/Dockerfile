FROM node:8.12-alpine as builder

# set working directory
RUN mkdir /opt/ifood
WORKDIR /opt/ifood

# add `node_modules/.bin` to $PATH
ENV PATH /opt/ifood/node_modules/.bin:$PATH

# copy files to build the project
COPY . /opt/ifood

RUN npm i --silent
RUN npm run build

FROM nginx:1.15.8-alpine    

COPY --from=builder /opt/ifood/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]