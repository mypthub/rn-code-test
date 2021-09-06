import Foundation

@objc(CTCodeModule)
open class CTCodeModule : NSObject, RCTBridgeModule {
  public static func moduleName() -> String! {
    "ServiceCodeModule"
  }

  @objc
  open func getCode(
    _ resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
    ) {
      let code: Optional<String> = Bundle.main.object(forInfoDictionaryKey: "service-key") as? String
      resolve(code ?? "")
    }
}
