import json,sys

def myFunc(name):
    print(json.dumps({'name':name}))

myFunc(sys.argv[1])