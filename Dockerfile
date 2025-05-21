FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/planet-md/KELLY-MD/root/prince

WORKDIR /root/lazack/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
