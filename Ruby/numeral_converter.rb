Symbols = [ [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'] ]

def arabic_to_roman(arabic)
  return '' if arabic.zero?
  Symbols.each { |arabic_rep, roman_rep| return roman_rep + arabic_to_roman(arabic - arabic_rep) if arabic >= arabic_rep }
end


# Symbols = { 1=>'I', 5=>'V', 10=>'X', 50=>'L', 100=>'C', 500=>'D', 1000=>'M' }
# Subtractors = [ [1000, 100], [500, 100], [100, 10], [50, 10], [10, 1], [5, 1], [1, 0] ]
#
# def roman(num)
#   return Symbols[num]  if Symbols.has_key?(num)
#   Subtractors.each do |cutPoint, subtractor|
#     return roman(cutPoint) + roman(num - cutPoint)      if num >  cutPoint
#     return roman(subtractor) + roman(num + subtractor)  if num >= cutPoint - subtractor and num < cutPoint
#   end
# end
#
# [1990, 2008, 1666].each do |i|
#   puts "%4d => %s" % [i, roman(i)]
# end

# Output from above should be:
# 1990 => MCMXC
# 2008 => MMVIII
# 1666 => MDCLXVI
