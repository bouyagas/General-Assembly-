class Cars
  attr_accessor :make, :model, :year, :color, :miles
  def initialize(make,model,year,color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
  end
  def seen_another_year
  	@miles += 15000
  end
  def details
    str = "This #{year} #{make} #{model} has #{miles} miles on it"
    str += @miles >= 50000 ? ", and that #{@color} paint is really starting to fade." : "."
    puts str
  end
  def ahh_fresh_paint(new_color)
    @color = new_color
    puts "The new #{@color} paint was a great choice."
  end
end

My_Whip = Cars.new("Ford", "Escort", 1993, "seafoam")

My_Whip.seen_another_year
My_Whip.seen_another_year
My_Whip.seen_another_year
My_Whip.seen_another_year

My_Whip.details


