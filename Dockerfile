FROM nexus.petrobras.com.br:5000/nginx:alpine

# LABEL maintainer="matheus.figueiredo.prestserv@petrobras.com.br"

RUN echo 'http://nexus.petrobras.com.br:8081/nexus/repository/apk-proxy/v3.14/main/' > /etc/apk/repositories
RUN echo 'http://nexus.petrobras.com.br:8081/nexus/repository/apk-proxy/v3.14/community/' >> /etc/apk/repositories

RUN apk update && apk add bash

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY ./dist/front-end /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 8080

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]