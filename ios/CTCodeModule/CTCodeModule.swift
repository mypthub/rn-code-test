import Foundation

@objc(CTCodeModule)
open class CTCodeModule : NSObject, RCTBridgeModule {
  public static func moduleName() -> String! {
    "CodeModule"
  }

  @objc
  open func getCode(
    _ resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
    ) {
      let code = Bundle.main.object(forInfoDictionaryKey: "service-key")
      print(">>>>>>>> \(code)w")
      resolve(code)
    }
}
