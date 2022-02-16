package com.rncodetest;



import android.content.res.Resources;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import java.util.HashMap;

public class StringExtracterModuleClass extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    StringExtracterModuleClass(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    @Override
    public String getName() {
        return "StringExtracterModule";
    }

    @ReactMethod
    public void getValue(String  key,Callback cb)
    {
        String packageName = reactContext.getPackageName();
        String val = reactContext.getString(reactContext.getResources().getIdentifier(key, "string", packageName));
        cb.invoke(val);
    }
}





