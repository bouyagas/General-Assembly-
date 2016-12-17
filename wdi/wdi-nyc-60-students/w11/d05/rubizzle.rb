class Car
  attr_accessor :make, :model, :year, :color, :miles
 def initialize(make, model, year, color, mile)
   @make = make,
   @model = model,
   @year = year,
   @color = color
   @mile = 0
 end

  def seen_another_year
    @mile =+ 15000
  end

  def details
    puts "This #{@year} #{@make} #{@model} has #{@miles} miles on it"
    puts " and that #{color} paint is really fading"
  end

  def ahh_fresh_paint(color)
     "The new #{color} color was a good choice"
  end
end

my_car = Car.new("Nissan", "Maxima", 2017, "blue", 24)

puts my_car.details

puts my_car.ahh_fresh_paint("white")
