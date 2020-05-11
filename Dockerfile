FROM nginx:latest

MAINTAINER chengye_a@163.com

COPY dist/ /usr/share/nginx/html/
