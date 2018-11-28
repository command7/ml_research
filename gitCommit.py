import subprocess

commitMsg = input()
subprocess.run(['git','add','.'])
subprocess.run(['git','commit','-m',commitMsg])
subprocess.run(['git','push'])
subprocess.run(['git', 'status'])
