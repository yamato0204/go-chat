FROM golang:1.18.3
ENV TZ=Asia/Tokyo


WORKDIR /app


RUN go install github.com/cosmtrek/air@latest

# RUN go install github.com/cosmtrek/air@v1.40.0
# COPY go.mod go.sum .air.toml ./
# RUN go mod download

COPY . .

CMD ["air", "-c", ".air.toml"]

