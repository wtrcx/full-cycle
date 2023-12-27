FROM golang as build

WORKDIR /go/src/app

COPY . .

RUN go build main.go

FROM scratch

WORKDIR /go

COPY --from=build /go/src/app /go

ENTRYPOINT [ "/go/main"]

