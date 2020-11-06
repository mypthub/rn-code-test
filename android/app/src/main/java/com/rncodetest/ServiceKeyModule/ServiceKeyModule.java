package com.rncodetest.ServiceKeyModule;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.rncodetest.R;
import com.facebook.react.bridge.Callback;

/**
 * Created by Edmond Lau on 2020-11-06.
 */

public class ServiceKeyModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext reactContext;

    public ServiceKeyModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "ServiceKeyModule";
    }


    @ReactMethod
    public void getServiceKey(Callback callback) {
        String serviceKey = reactContext.getResources().getString(R.string.service_key);
        callback.invoke(serviceKey);
    }
}

