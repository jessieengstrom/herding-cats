def postfix(string):
    precedence = {}
    precedence['*'] = 3
    precedence['/'] = 3
    precedence['-'] = 2
    precedence['+'] = 2
    
    op_stack = []
    post_fix_list = []
    tokens = string.split()
    for token in tokens:
        if token not in precedence:
            post_fix_list.append(token)
        else:
            while op_stack and precedence[op_stack[-1]] >= precedence[token]:
                    post_fix_list.append(op_stack.pop())
            op_stack.append(token)
            
    while op_stack:
        post_fix_list.append(op_stack.pop())
    
    return ' '.join(post_fix_list)
    
def evaluate_postfix(string):
    
    operations = {
        '*': lambda x, y: x * y,
        '/': lambda x, y: x / y,
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
    }
    
    operands_stack = []
    tokens = postfix(string).split()
    
    for token in tokens:
        if token not in operations:
            operands_stack.append(int(token))
        
        else:
            op1 = operands_stack.pop()
            op2 = operands_stack.pop()
            result = operations[token] (op2, op1)
            operands_stack.append(result)
        
    return operands_stack.pop()
    
print evaluate_postfix('1 * -2 + -3 * 4')
print evaluate_postfix('1 + 135 / 134')
print evaluate_postfix('-234')
print evaluate_postfix('1 + 2 * 3 + 4')
        