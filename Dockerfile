FROM node:14.15.3

# install zsh for prezto
RUN apt-get update -qq && apt-get install -y vim zsh
RUN chsh -s /bin/zsh
