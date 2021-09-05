package com.rncodetest.scode

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rncodetest.R

class CodeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = Defs.MODULE_NAME

    @ReactMethod
    fun getCode(promise: Promise) {
        promise.resolve(R.string.service_key)
    }
}
