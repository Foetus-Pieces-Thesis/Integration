import sys
import datetime


time=datetime.datetime.now()

output="Hi %s welcome %s" % (sys.argv[1],time)

print(output)

