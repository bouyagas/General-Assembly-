kanye_records = [
  { year: 2016, title: "The Life of Pablo" },
  { year: 2013, title: "Yeezus" },
  { year: 2011, title: "Watch the Throne" },
  { year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
  { year: 2008, title: "808s and Heartbreak" },
  { year: 2007, title: "Graduation" },
  { year: 2005, title: "Late Registration" },
  { year: 2004, title: "The College Dropout" }
]

# Part 1

# kanye_records.each do |record|
#   puts record[:title]
# end

# for record in kanye_records
#   puts record[:title]
# end

# part 3

# kanye_records.unshift({ :year => 2017, :title => "Natty Davis watch your damn mouth"})

# puts kanye_records

# part 4
# puts kanye_records.select { |album| album[:year] > 2007}

# part 5
# kanye_records.each do |record|
#   puts "#{record[:title]} was released in #{record[:year]}"
# end

# part 6
# kanye_records.each { |record| record[:label] = 'def jam'}
# puts kanye_records

# part 7
# kanye_records.each do |i|
#   if(i[:title].length > 15)
#     puts "#{i[:title]} has a long title"
#   end
# end


# part 8
# kanye_records.each do | i |
#   i[:title].gsub!(/o/i,"0")
# end









