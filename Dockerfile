FROM python:latest

COPY /dist/finverse .

EXPOSE 5000

CMD python3 -m http.server 5000