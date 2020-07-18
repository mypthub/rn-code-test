package com.rncodetest;

import android.app.Activity;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class GetServiceKeyModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";

  GetServiceKeyModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "ServiceKeyModule";
  }

  private String serviceKey() {
    Activity activity = getCurrentActivity();
    String serviceKey = activity.getResources().getString(R.string.service_key);
    return serviceKey;
  }

  @ReactMethod
  public void GetServiceKey(Promise promise) {
    try {
      promise.resolve(serviceKey());
    } catch (Exception  e) {
      promise.reject(E_LAYOUT_ERROR, e);
    }
  }
}