FROM node:current-alpine3.20 AS buildenv
ADD . /mnt/build
WORKDIR /mnt/build
RUN npm install
RUN npm run build

FROM nginx:1.27.3 
RUN mkdir /var/www
COPY --from=buildenv /mnt/build/dist /var/www/intercomdashboard
COPY nginx.conf /etc/nginx/conf.d/intercomdashboard.conf
RUN rm /etc/nginx/conf.d/default.conf
RUN chown nginx:nginx /etc/nginx/conf.d/*
RUN chown -R nginx:nginx /var/www/intercomdashboard
# Quick syntax check on our nginx configs
RUN nginx -t