# # 1
# print "Hello World"
# variable_declarations = "In ruby, we don't need to use the var keyword to assign variables!"
# puts variable_declarations

#
#
# # 2
# the_word = "Bird "

# 3.times do
#   print the_word
# end

# print "#{the_word} is the word"
#
#
#
# # 3
h = { "n" => 100, "m" => 100, "y" => 300, "d" => 200, "a" => 0 }
taco = h.shift
print taco
#
#
#
#
# # 4
# CHANGE = "I am a constant!"
# puts CHANGE
#
# CHANGE = "If you try to change me, I'll throw a warning!"
# puts CHANGE
#
#
#
#
# # 5
# one = 2 - 1
# apple = "apple"
# if one > 0
#   puts "numbers are truthy in both ruby and js"
# end

# if apple
#   puts "strings are truthy values in ruby, just like in js"
# end

# if 1 == "1"
#   puts "this won't print"
# elsif 1 == one
#   puts "strict equalilty is done with 2 equal signs in ruby, rather than 3 in js!"
# end

#
#
# # 6
# numbers = [1,2,3,4,5]
# numbers.each do |number|
#   puts number
# end
#
#
#
#
# # 7
# numbers = [1,2,3,4,5]
# doubles = numbers.map do |num|
#   num * 2
# end
# puts doubles
#
#
#
#
# # 8
# numbers = [1,2,3,4,5]
# evens = numbers.select do |num|
#   num % 2 == 0
# end
# puts evens
#
#
#
# # 9
# class DOG
#   def bark
#     puts "BARK!"
#   end
#
#   def bark_phrase(words)
#     puts words
#   end
#
#   def no_parenthesis words
#     puts words
#   end
#
# end
#
# alfred = DOG.new
# alfred.bark
# alfred.bark_phrase("In ruby, dogs can talk")
# alfred.no_parenthesis "In ruby, humans don't need to use parenthesis all the time!"
#
#
#
#
# # 10
# list_of_numbers = (1..10).to_a
#
# puts "Tacocat".reverse
#
# puts "the list of numbers is: #{list_of_numbers.join ', '}"
#
# puts list_of_numbers.reject! { |num| nun % 2 == 0 }
# puts list_of_numbers
#
# hashling = { "a" => 100, "b" => 200 }
# puts hashling.each {|key, value| puts "#{key} is #{value}" }
#
# h = { "a" => 100, "b" => 200 }
# h.fetch("z", "not found")