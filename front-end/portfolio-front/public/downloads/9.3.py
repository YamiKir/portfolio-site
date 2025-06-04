def main():
    try:
        file=open('text.txt', 'r')
        filez=open('code.txt','w')
        line=file.readline()
        codes={'A': '%', 'a':'9', 'B':'@', 'b':'2', 'C':'B', 'c':'_','D': 's', 'd':'x', 'e':'F', "E":"p",'F':'e', 'f':'3', 'G':'5','g':'n'}
        while line!="":
            for x in range(0,len(line)):
                filez.write(codes[line[x]])
            print("\n")
            line=file.readline()
            filez.write('\n')
        file.close()
        filez.close()
    except IndexError:
        print("the cypher is missing one of these values. Use characters A=g")
main()
