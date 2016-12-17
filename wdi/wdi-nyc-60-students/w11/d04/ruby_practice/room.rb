class My_room

    def initialize(students, instructors, projector, laptop)
      @students = students,
      @instructors = instructors,
      @projector = projector,
      @laptop = laptop
   end


  def num_student
    @students
  end

  def num_instructor
    @instructors
  end

  def projector
    @projector
  end

  def laptop
    @laptop
  end

end

wholphin = My_room.new(23, 2, "electronic", "macbook")
arr = [wholphin.num_student, wholphin.num_instructor, wholphin.projector, wholphin.laptop]

arr.each do |t|
  puts t
end



