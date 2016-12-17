# my_name = 'Slim Shady'
# my_age = 38
# my_height = 67
# my_weight = 180
# my_eyes = 'Blue'
# my_teeth = 'White'
# my_hair = 'Blonde'
# puts "lets talk about #{my_name}"
# puts "he's #{my_height} inches tall"
# puts "he's #{my_weight} pounds heavy"
# puts "he's #{my_height} inches tall"
# puts "Actually that is not too heavy"
# puts "He's got #{my_eyes}and #{my_hair}hair."
# puts " His teeth are usually #{my_teeth} depending on the coffee."
# puts "If I add 38, 67, 180 I get #{my_age+my_weight+my_height}"



class Multiples

  def multiples
    numbers = Array(1..999)
    multiples = Array.new
    for i in numbers
      if i%3 == 0 or i%5 == 0
        multiples.push(i)
      end
    end
    multiples
  end

  def sumMultiples(multiples)
    total = 0
    multiples.each { |i| total+= i }
    puts(total)
  end

end

multiples = Multiples.new
multiples.sumMultiples(multiples.multiples)
