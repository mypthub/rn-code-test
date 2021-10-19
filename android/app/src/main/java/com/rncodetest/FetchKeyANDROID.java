package com.rncodetest;

import android.content.Context;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Callback;

import android.util.Log;

public class FetchKeyANDROID extends ReactContextBaseJavaModule {
    private Context context = null;
    FetchKeyANDROID(ReactApplicationContext context) {
        super(context);
        this.context=context;
    }

    @ReactMethod
    public void getKey(Callback keyCallback) {
        // boolean isDebuggable =  ( 0 != ( getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE ) );
        // if (isDebuggable) {
        //      String key = context.getString(R.string.service_key);
        //       keyCallback.invoke(key);
        // }
        // else {
        //      String key = context.getString(R.string.production_service_key);
        //      keyCallback.invoke(key);
        // }
        Log.d("myTag", "This is my message" + context.getString(R.string.service_key));
        String key = context.getString(R.string.service_key);
        keyCallback.invoke(key);

    }

    @Override
    public String getName() {
        return "FetchKeyANDROID";
    }


}