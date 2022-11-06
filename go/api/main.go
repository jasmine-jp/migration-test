package api

import (
	"context"
	"github.com/google/go-github/v48/github"
)

func Get(username string) (followers, repos int) {
	users := github.NewClient(nil).Users
	uResp, _, _ := users.Get(context.Background(), username)

	return uResp.GetFollowers(), uResp.GetPublicRepos()
}