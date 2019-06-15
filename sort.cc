#include <nan.h>
#include <iostream>

void bubbleSort(const v8::FunctionCallbackInfo<v8::Value>& args) {
    std::vector <int> array;
    int i, j, length = 100000;

    for (i = length; i > 0; i--) {
      array.push_back(i);
    }

    for (i = 0; i < length; i++){
      for (j = 0; j <= length - i - 1; j++){
        if (array[j] > array[j + 1]) {
            int temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
           }
       }
    }
}

// first is export: same as node exports
// second argument: module, same as in js
void Init(v8::Local<v8::Object> exports) {
   NODE_SET_METHOD(exports, "bubbleSort", bubbleSort);
}

// entry point for Node Addon
// specifies node where to go once the library has been loaded into active memory.
// first argument must match the target name in binding.gyp, second argument: function to invoke
NODE_MODULE(sort, Init);
