class NumbersController < ApplicationController
  def index
  end

  def start
    Thread.new do
      count = 1
      while count <= 100 do
        ActionCable.server.broadcast('number_channel', { number: count })
        count += 1
        sleep 0.1
      end
    end
    head :ok
  end
end
