package com.rncodetest.scode

import android.content.res.Resources
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rncodetest.R

class ServiceCodeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = Defs.MODULE_NAME

    @ReactMethod
    fun getCode(promise: Promise) {
        promise.resolve(getValueSafely(R.string.service_key))
    }

    private fun getValueSafely(pointer: Int): String = try {
        reactApplicationContext.resources.getString(pointer)
    } catch (e: Resources.NotFoundException) {
        Log.e(Defs.MODULE_NAME, "Error fetching service key: ${e.message}")
        ""
    }
}
