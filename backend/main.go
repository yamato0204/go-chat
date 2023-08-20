package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/yamato0204/go-chat/src/domain"
	"github.com/yamato0204/go-chat/src/handler"
)

func main() {

	hub := domain.NewHub()
	go hub.RunLoop()

	http.HandleFunc("/ws", handler.NewWebsocketHandler(hub).Handle)

	port := "80"
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(fmt.Sprintf(":%v", port), nil); err != nil {
		log.Panicln("Serve Error:", err)
	}
}