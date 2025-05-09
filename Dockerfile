FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/LOFTXMD23/Loft-xmd-s24/root/prince

WORKDIR /root/prince/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
