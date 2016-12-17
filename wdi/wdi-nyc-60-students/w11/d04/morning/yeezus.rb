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


# kanye_records.each do |k|
#   puts k[:title]
# end


# kanye_records.each do |k|
#   puts k[:year]
# end

# kanye_records << {year: 2017, title: 'Make America Great Again'}

# kanye_records.each do |k|
#     if k[:year] >= 2007
#     puts k[:year]
#   end
#  end

kanye_records.each do |k|
    if k[:year] > 2007
    puts "#{k[:title]} was released in #{k[:year]}"
  end
 end
