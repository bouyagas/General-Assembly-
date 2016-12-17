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


## PROBLEM 1
# Jimmy/Grace

# p kanye_records.map{|titles| titles[:title]}

#Nicky
# kanye_records.each do |albums|
#   puts albums[:title]
# end

## PROBLEM 3
#Paris
# kanye_records << { year: 2017, title: "Princess Diarrheaz"}
# kanye_records.unshift({year: 2017, title: "Irwinning's Big Win"})
# kanye_records += [{year:2017, title: "Graphics Turbo"}]


##PROBLEM 4

#Scott:
# kanye_records.each do |album|
#  if album[:year] >= 2007
#    puts "#{album[:title]}"
#  end
# end

#NICK
# puts kanye_records.select{ |x| x[:year] > 2007 }

#Taka
# 

# PROBLEM 5:
# kanye_records.select { |k| puts "#{k[:title]} was released in #{k[:year]}" if k[:year] > 2007 }


# PROBLEM 6:
# Matt C:
# kanye_records.each do |record|
#  record[:label] = "Def Jam"
# end

# kanye_records.each do | i |
#   i.merge!(label: "def jam") 
# end


## BONUS PROBLEM 1:

# Andrew:
# kanye_records.each do |ego_boost|
#  if ego_boost[:title].length > 15
#    puts "'#{ego_boost[:title]}' Damn thats a long title!"
#  end
# end

## BONUS PROBLEM 2:

# Paris:
# kanye_records.each do |record|
#   record[:title] = record[:title].gsub(/o/, '0')
# end


# kanye_records.each do |record|
#  puts record[:title].tr("o", "0")
# end


# puts kanye_records