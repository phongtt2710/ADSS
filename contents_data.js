USETEXTLINKS = 1;
STARTALLOPEN = 0;
HIGHLIGHT = 1;
HIGHLIGHT_BG = "#808080";
ICONPATH = "images/";
GLOBALTARGET = "R";
foldersTree = gFld("", "");
foldersTree.iconSrc = ICONPATH + "ftv2blank.gif";
foldersTree.treeID = "Tree130115621";

xwelcome = insFld(
  foldersTree,
  gFld("&nbsp;Chào Mừng&nbsp;", "pages/welcome.htm")
);
docAux = insDoc(
  xwelcome,
  gLnk(
    "R",
    "&nbsp;Liên hệ hỗ trợ&nbsp;Ascertia&nbsp;",
    "pages/contacting_ascertia_support.htm"
  )
);
docAux = insDoc(
  xwelcome,
  gLnk(
    "R",
    "&nbsp;Cơ sở kiến ​​thức máy chủ ADSS&nbsp;",
    "pages/adss_knowledge_base.htm"
  )
);
xgetting_started = insFld(
  foldersTree,
  gFld("&nbsp;Bắt đầu&nbsp;", "pages/getting_started.htm")
);
docAux = insDoc(
  xgetting_started,
  gLnk("R", "&nbsp;Yêu cầu hệ thống&nbsp;", "pages/system_requirements.htm")
);
docAux = insDoc(
  xgetting_started,
  gLnk("R", "&nbsp;Thuật ngữ&nbsp;", "pages/glossary.htm")
);
docAux = insDoc(
  xgetting_started,
  gLnk(
    "R",
    "&nbsp;Tham khảo các tiêu chuẩn PKI&nbsp;",
    "pages/reference_to_pki_standards.htm"
  )
);
xadss_server___concepts___architecture = insFld(
  foldersTree,
  gFld(
    "&nbsp;Khái niệm&nbsp;và Kiến trúc&nbsp",
    "pages/adss_server_-_concepts___architecture.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Danh tính đã được chứng minh, niềm tin được cung cấp&nbsp;",
    "pages/introduction4.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Các tính năng và lợi ích của máy chủ ADSS&nbsp;",
    "pages/adss_server_features_and_benefits.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Dịch vụ tin cậy máy chủ ADSS&nbsp;",
    "pages/adss_server_trust_services.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Kiến trúc máy chủ ADSS&nbsp;",
    "pages/adss_server_architecture_interfaces.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ ký ADSS&nbsp;",
    "pages/adss_server_-_signing_service.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ xác minh ADSS&nbsp;",
    "pages/adss_server_-_verification_service.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ chứng nhận ADSS&nbsp;",
    "pages/adss_server_-_certification_service.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ ADSS OCSP&nbsp;",
    "pages/adss_server_-_ocsp_service.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ ADSS TSA&nbsp;",
    "pages/adss_server_-_tsa_service.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ ADSS XKMS&nbsp;",
    "pages/adss_xkms_service_overview.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ ADSS SCVP&nbsp;",
    "pages/adss_scvp_service_overview.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ ADSS LTANS&nbsp;",
    "pages/adss_ltan_service_overview.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về dịch vụ giải mã ADSS&nbsp;",
    "pages/adss_decryption_service_overview.htm"
  )
);
docAux = insDoc(
  xadss_server___concepts___architecture,
  gLnk(
    "R",
    "&nbsp;Tổng quan về màn hình ADSS CRL&nbsp;",
    "pages/adss_server_-_crl_manager_service.htm"
  )
);
xadss_ra_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ ADSS RA&nbsp;", "pages/adss_ra_service.htm")
);
xconfiguring_the_ra_service1 = insFld(
  xadss_ra_service,
  gFld(
    "&nbsp;Cấu hình dịch vụ RA&nbsp;",
    "pages/configuring_the_ra_service1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ra_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Danh mục hồ sơ&nbsp;",
    "pages/profile_categories.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ra_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Hồ sơ RA&nbsp;",
    "pages/ra_profiles.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ra_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Đăng ký ứng dụng kinh doanh&nbsp;",
    "pages/registering_business_application.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ra_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Sử dụng Trình quản lý dịch vụ&nbsp;",
    "pages/configuring_the_ra_service.htm"
  )
);
xdevice_certificates = insFld(
  xadss_ra_service,
  gFld("&nbsp;Chứng chỉ thiết bị&nbsp;", "pages/device_certificates.htm")
);
docAux = insDoc(
  xdevice_certificates,
  gLnk(
    "R",
    "&nbsp;Giấy chứng nhận đã cấp&nbsp;",
    "pages/issued_certificates1.htm"
  )
);
docAux = insDoc(
  xdevice_certificates,
  gLnk("R", "&nbsp;Yêu cầu đang chờ xử lý&nbsp;", "pages/pending_requests.htm")
);
docAux = insDoc(
  xdevice_certificates,
  gLnk("R", "&nbsp;Yêu cầu bị từ chối&nbsp;", "pages/declined_requests1.htm")
);
xend_user_certificates = insFld(
  xadss_ra_service,
  gFld(
    "&nbsp;Chứng chỉ người dùng cuối&nbsp;",
    "pages/end-user_certificates.htm"
  )
);
docAux = insDoc(
  xend_user_certificates,
  gLnk(
    "R",
    "&nbsp;Giấy chứng nhận đã cấp&nbsp;",
    "pages/issued_certificates.htm"
  )
);
docAux = insDoc(
  xend_user_certificates,
  gLnk("R", "&nbsp;Yêu cầu đang chờ xử lý&nbsp;", "pages/pending_requests1.htm")
);
docAux = insDoc(
  xend_user_certificates,
  gLnk("R", "&nbsp;Yêu cầu bị từ chối&nbsp;", "pages/declined_requests.htm")
);
docAux = insDoc(
  xadss_ra_service,
  gLnk(
    "R",
    "&nbsp;Trình xem nhật ký giao dịch&nbsp;",
    "pages/transactions_log_viewer5.htm"
  )
);
docAux = insDoc(
  xadss_ra_service,
  gLnk("R", "&nbsp;Lưu trữ nhật ký&nbsp;", "pages/logs_archiving9.htm")
);
docAux = insDoc(
  xadss_ra_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts6.htm")
);
docAux = insDoc(
  xadss_ra_service,
  gLnk(
    "R",
    "&nbsp;URL giao diện dịch vụ RA&nbsp;",
    "pages/ra_service_interface_urls.htm"
  )
);
xadss_server_certification_service = insFld(
  foldersTree,
  gFld(
    "&nbsp;Dịch vụ chứng nhận ADSS&nbsp;",
    "pages/adss_server_certification_service.htm"
  )
);
xconfiguring_the_certification_service = insFld(
  xadss_server_certification_service,
  gFld(
    "&nbsp;Cấu hình dịch vụ chứng nhận&nbsp;",
    "pages/configuring_the_certification_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_certification_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Cấu hình Tổ chức phát hành chứng nhận&nbsp;",
    "pages/configuring_certification_authorities.htm"
  )
);
xstep_3___creating_a_certification_profile = insFld(
  xconfiguring_the_certification_service,
  gFld(
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Tạo hồ sơ&nbsp;",
    "pages/step_3_-_creating_a_certification_profile.htm"
  )
);
docAux = insDoc(
  xstep_3___creating_a_certification_profile,
  gLnk(
    "R",
    "&nbsp;Tạo hồ sơ chứng nhận&nbsp;",
    "pages/creating_an_identity_profile.htm"
  )
);
docAux = insDoc(
  xstep_3___creating_a_certification_profile,
  gLnk(
    "R",
    "&nbsp;Tạo hồ sơ chứng chỉ thuộc tính&nbsp;",
    "pages/creating_an_attribute_profile.htm"
  )
);
docAux = insDoc(
  xstep_3___creating_a_certification_profile,
  gLnk(
    "R",
    "&nbsp;Tạo hồ sơ chứng chỉ CV&nbsp;",
    "pages/creating_a_cv_certificate_profile.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_certification_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Đăng ký ứng dụng kinh doanh&nbsp;",
    "pages/allow_access_to_the_certification_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_certification_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Sử dụng Trình quản lý dịch vụ&nbsp;",
    "pages/step_4___using_the_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk("R", "&nbsp;Tích hợp thư mục&nbsp;", "pages/directory_integration.htm")
);
xx509_certificates = insFld(
  xadss_server_certification_service,
  gFld("&nbsp;Giấy chứng nhận danh tính&nbsp;", "pages/x509_certificates.htm")
);
docAux = insDoc(
  xx509_certificates,
  gLnk(
    "R",
    "&nbsp;Giấy chứng nhận đã cấp&nbsp;",
    "pages/reviewing_issued_certificates.htm"
  )
);
docAux = insDoc(
  xx509_certificates,
  gLnk(
    "R",
    "&nbsp;Chứng chỉ đang chờ xử lý&nbsp;",
    "pages/pending_certificates.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk(
    "R",
    "&nbsp;Chứng chỉ thuộc tính&nbsp;",
    "pages/attribute_certificates.htm"
  )
);
xcv_certificate = insFld(
  xadss_server_certification_service,
  gFld("&nbsp;Giấy chứng nhận CV&nbsp;", "pages/cv_certificate.htm")
);
docAux = insDoc(
  xcv_certificate,
  gLnk(
    "R",
    "&nbsp;Giấy chứng nhận đã cấp&nbsp;",
    "pages/issued_certificates2.htm"
  )
);
docAux = insDoc(
  xcv_certificate,
  gLnk("R", "&nbsp;Yêu cầu đang chờ xử lý&nbsp;", "pages/pending_request.htm")
);
docAux = insDoc(
  xcv_certificate,
  gLnk("R", "&nbsp;Yêu cầu bị từ chối&nbsp;", "pages/declined_requests2.htm")
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk("R", "&nbsp;Mẫu chứng chỉ&nbsp;", "pages/certificate_templates2.htm")
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk(
    "R",
    "&nbsp;Mẫu chứng chỉ CV&nbsp;",
    "pages/cv_certificate_templates.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk(
    "R",
    "&nbsp;Trình xem nhật ký giao dịch&nbsp;",
    "pages/certification_transactions_log.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk(
    "R",
    "&nbsp;Lưu trữ nhật ký&nbsp;",
    "pages/certification_logs_archiving.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/certification_alerts.htm")
);
xcertification_management_reporting = insFld(
  xadss_server_certification_service,
  gFld(
    "&nbsp;Báo cáo quản lý&nbsp;",
    "pages/certification_management_reporting.htm"
  )
);
docAux = insDoc(
  xcertification_management_reporting,
  gLnk("R", "&nbsp;Báo cáo dịch vụ&nbsp;", "pages/service_report2.htm")
);
docAux = insDoc(
  xcertification_management_reporting,
  gLnk("R", "&nbsp;Báo cáo sử dụng&nbsp;", "pages/usage_report2.htm")
);
docAux = insDoc(
  xcertification_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo hồ sơ&nbsp;",
    "pages/certification_profiles_report.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk(
    "R",
    "&nbsp;Tối ưu hóa hiệu suất máy chủ chứng nhận ADSS&nbsp;",
    "pages/optimising_adss_certification_server_performance.htm"
  )
);
docAux = insDoc(
  xadss_server_certification_service,
  gLnk(
    "R",
    "&nbsp;URL giao diện dịch vụ chứng nhận&nbsp;",
    "pages/service_urls1.htm"
  )
);
xadss_server___signing_service6 = insFld(
  foldersTree,
  gFld(
    "&nbsp;Dịch vụ ký ADSS&nbsp;",
    "pages/adss_server_-_signing_service6.htm"
  )
);
xconfiguring_the_adss_signing_service3 = insFld(
  xadss_server___signing_service6,
  gFld(
    "&nbsp;Cấu hình dịch vụ ký&nbsp;",
    "pages/configuring_the_adss_signing_service3.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_adss_signing_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Tạo khóa và chứng chỉ&nbsp;",
    "pages/step_2_-_generating_keys_certs_through_key_manager.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_adss_signing_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký CA&nbsp;",
    "pages/step_2_-_register_cas_using_trust_manager1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_adss_signing_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Cấu hình màn hình CRL&nbsp;",
    "pages/step_3_-_configuring_crl_monitor.htm"
  )
);
xstep_3___configuring_a_signing_profile = insFld(
  xconfiguring_the_adss_signing_service3,
  gFld(
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Định cấu hình hồ sơ ký&nbsp;",
    "pages/step_3_-_configuring_a_signing_profile.htm"
  )
);
xgeneral_settings = insFld(
  xstep_3___configuring_a_signing_profile,
  gFld("&nbsp;Cài đặt chung&nbsp;", "pages/general_settings.htm")
);
docAux = insDoc(
  xgeneral_settings,
  gLnk("R", "&nbsp;Các loại chữ ký được hỗ trợ&nbsp;", "pages/types.htm")
);
xconfiguring_pdf_signing_attributes = insFld(
  xstep_3___configuring_a_signing_profile,
  gFld(
    "&nbsp;Cài đặt chữ ký&nbsp;",
    "pages/configuring_pdf_signing_attributes.htm"
  )
);
xpdf_signing_attributes2 = insFld(
  xconfiguring_pdf_signing_attributes,
  gFld(
    "&nbsp;Thuộc tính ký PDF/PAdES&nbsp;",
    "pages/pdf_signing_attributes2.htm"
  )
);
xvisible_pdf_signatures = insFld(
  xpdf_signing_attributes2,
  gFld(
    "&nbsp;Chữ ký PDF có thể nhìn thấy&nbsp;",
    "pages/visible_pdf_signatures.htm"
  )
);
docAux = insDoc(
  xvisible_pdf_signatures,
  gLnk(
    "R",
    "&nbsp;Sử dụng ngôn ngữ địa phương&nbsp;",
    "pages/using_a_local_language.htm"
  )
);
xinvisible_pdf_signatures = insFld(
  xpdf_signing_attributes2,
  gFld("&nbsp;Chữ ký PDF vô hình&nbsp;", "pages/invisible_pdf_signatures.htm")
);
docAux = insDoc(
  xinvisible_pdf_signatures,
  gLnk(
    "R",
    "&nbsp;Sử dụng ngôn ngữ địa phương&nbsp;",
    "pages/using_a_local_language1.htm"
  )
);
docAux = insDoc(
  xconfiguring_pdf_signing_attributes,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký băm PDF/PAdES&nbsp;",
    "pages/pdf_hash_signing_attributes1.htm"
  )
);
docAux = insDoc(
  xconfiguring_pdf_signing_attributes,
  gLnk(
    "R",
    "&nbsp;Thuộc tính Ký Microsoft Office&nbsp;",
    "pages/ms_office_signing_attributes.htm"
  )
);
docAux = insDoc(
  xconfiguring_pdf_signing_attributes,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký PKCS7&nbsp;",
    "pages/pkcs7_signing_attributes1.htm"
  )
);
docAux = insDoc(
  xconfiguring_pdf_signing_attributes,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký CMS/CAdES&nbsp;",
    "pages/cms_signing_attributes1.htm"
  )
);
docAux = insDoc(
  xconfiguring_pdf_signing_attributes,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký XML/XAdES&nbsp;",
    "pages/xml_dsig_signing_attributes.htm"
  )
);
docAux = insDoc(
  xconfiguring_pdf_signing_attributes,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký S/MIME&nbsp;",
    "pages/s_mime_signing_attributes1.htm"
  )
);
docAux = insDoc(
  xstep_3___configuring_a_signing_profile,
  gLnk("R", "&nbsp;Cài đặt nâng cao&nbsp;", "pages/advance_settings.htm")
);
docAux = insDoc(
  xconfiguring_the_adss_signing_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;5&nbsp;-&nbsp;Đăng ký ứng dụng kinh doanh&nbsp;",
    "pages/step_1_-_registering_client_applications.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_adss_signing_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;6&nbsp;-&nbsp;Sử dụng Trình quản lý dịch vụ&nbsp;",
    "pages/step_4_-_using_the_signing_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk(
    "R",
    "&nbsp;Xuất hiện chữ ký PDF&nbsp;",
    "pages/step_3_-_pdf_sig_appearances1.htm"
  )
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk(
    "R",
    "&nbsp;Vị trí chữ ký PDF&nbsp;",
    "pages/pdf_signature_locations.htm"
  )
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk(
    "R",
    "&nbsp;Trình xem nhật ký giao dịch&nbsp;",
    "pages/signing_service_transaction_log_viewer.htm"
  )
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk("R", "&nbsp;Nhật ký xác thực&nbsp;", "pages/authentication_logs.htm")
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk("R", "&nbsp;Lưu trữ nhật ký&nbsp;", "pages/signing_logs_archiving.htm")
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/signing_service_alerts.htm")
);
xsigning_management_reporting = insFld(
  xadss_server___signing_service6,
  gFld("&nbsp;Báo cáo quản lý&nbsp;", "pages/signing_management_reporting.htm")
);
xservice_statistical_reports = insFld(
  xsigning_management_reporting,
  gFld(
    "&nbsp;Báo cáo thống kê dịch vụ&nbsp;",
    "pages/service_statistical_reports.htm"
  )
);
docAux = insDoc(
  xservice_statistical_reports,
  gLnk("R", "&nbsp;Báo cáo dịch vụ&nbsp;", "pages/service_report.htm")
);
docAux = insDoc(
  xservice_statistical_reports,
  gLnk("R", "&nbsp;Báo cáo thống kê sử dụng&nbsp;", "pages/usage_report.htm")
);
docAux = insDoc(
  xservice_statistical_reports,
  gLnk(
    "R",
    "&nbsp;Báo cáo thống kê hồ sơ&nbsp;",
    "pages/signing_profiles_report.htm"
  )
);
docAux = insDoc(
  xservice_statistical_reports,
  gLnk(
    "R",
    "&nbsp;Báo cáo thống kê khách hàng&nbsp;",
    "pages/client_stats_report.htm"
  )
);
docAux = insDoc(
  xservice_statistical_reports,
  gLnk(
    "R",
    "&nbsp;Báo cáo thống kê phiên bản&nbsp;",
    "pages/instances_stats_report.htm"
  )
);
docAux = insDoc(
  xsigning_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo quản lý về dữ liệu trực tiếp&nbsp;",
    "pages/management_reports_on_live_data.htm"
  )
);
docAux = insDoc(
  xsigning_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo thống kê dịch vụ&nbsp;",
    "pages/service_statistical_report2.htm"
  )
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk(
    "R",
    "&nbsp;Tối ưu hóa hiệu suất máy chủ ký ADSS&nbsp;",
    "pages/optimising_adss_signing_server_performance.htm"
  )
);
docAux = insDoc(
  xadss_server___signing_service6,
  gLnk("R", "&nbsp;Ký URL giao diện dịch vụ&nbsp;", "pages/service_urls.htm")
);
xadss_go_sign_service = insFld(
  foldersTree,
  gFld("&nbsp;ADSS Go>Dịch vụ ký tên&nbsp;", "pages/adss_go-sign_service.htm")
);
xconfiguring_the_go_sign_service = insFld(
  xadss_go_sign_service,
  gFld(
    "&nbsp;Cấu hình Go>Dịch vụ ký tên&nbsp;",
    "pages/configuring_the_go-sign_service.htm"
  )
);
xconfiguring_a_go_sign_profile = insFld(
  xconfiguring_the_go_sign_service,
  gFld(
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Tạo một Go>Ký hồ sơ&nbsp;",
    "pages/configuring_a_go-sign_profile.htm"
  )
);
xdocument_signing = insFld(
  xconfiguring_a_go_sign_profile,
  gFld("&nbsp;Cấu hình ký tài liệu&nbsp;", "pages/document_signing.htm")
);
xsignature_settings = insFld(
  xdocument_signing,
  gFld("&nbsp;Cài đặt chữ ký&nbsp;", "pages/signature_settings.htm")
);
xpdf_signature1 = insFld(
  xsignature_settings,
  gFld("&nbsp;Thuộc tính ký PDF/PAdES&nbsp;", "pages/pdf_signature1.htm")
);
xvisible_pdf_signature2 = insFld(
  xpdf_signature1,
  gFld(
    "&nbsp;Chữ ký PDF có thể nhìn thấy&nbsp;",
    "pages/visible_pdf_signature2.htm"
  )
);
docAux = insDoc(
  xvisible_pdf_signature2,
  gLnk(
    "R",
    "&nbsp;Xuất hiện chữ ký PDF&nbsp;",
    "pages/pdf_signature_appearances2.htm"
  )
);
docAux = insDoc(
  xvisible_pdf_signature2,
  gLnk(
    "R",
    "&nbsp;Sử dụng ngôn ngữ địa phương&nbsp;",
    "pages/using_a_local_language2.htm"
  )
);
xinvisible_pdf_signature_2 = insFld(
  xpdf_signature1,
  gFld("&nbsp;Chữ ký PDF vô hình&nbsp;", "pages/invisible_pdf_signature_2.htm")
);
docAux = insDoc(
  xinvisible_pdf_signature_2,
  gLnk(
    "R",
    "&nbsp;Sử dụng ngôn ngữ địa phương&nbsp;",
    "pages/using_local_language.htm"
  )
);
docAux = insDoc(
  xsignature_settings,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký mã băm PDF/PAdES&nbsp;",
    "pages/signature_settings_-_pdf_hash.htm"
  )
);
docAux = insDoc(
  xsignature_settings,
  gLnk("R", "&nbsp;Thuộc tính ký CMS/CAdES&nbsp;", "pages/cms_signature1.htm")
);
docAux = insDoc(
  xsignature_settings,
  gLnk("R", "&nbsp;Thuộc tính ký XML/XAdES&nbsp;", "pages/xml_signature1.htm")
);
docAux = insDoc(
  xsignature_settings,
  gLnk(
    "R",
    "&nbsp;Thuộc tính ký MS Office&nbsp;",
    "pages/msword_signing_attributes.htm"
  )
);
docAux = insDoc(
  xdocument_signing,
  gLnk("R", "&nbsp;Cài đặt người xem&nbsp;", "pages/viewer_settings.htm")
);
docAux = insDoc(
  xdocument_signing,
  gLnk("R", "&nbsp;Cài đặt lưu trữ khóa&nbsp;", "pages/key_store_settings.htm")
);
docAux = insDoc(
  xdocument_signing,
  gLnk(
    "R",
    "&nbsp;Tiêu chí lọc chứng chỉ&nbsp;",
    "pages/certificate_filter_criteria.htm"
  )
);
docAux = insDoc(
  xdocument_signing,
  gLnk("R", "&nbsp;Cài đặt dịch vụ&nbsp;", "pages/service_settings1.htm")
);
docAux = insDoc(
  xdocument_signing,
  gLnk("R", "&nbsp;Cài đặt nâng cao&nbsp;", "pages/advanced_settings2.htm")
);
xcertificate_generation = insFld(
  xconfiguring_a_go_sign_profile,
  gFld("&nbsp;Cấu hình tạo chứng chỉ&nbsp;", "pages/certificate_generation.htm")
);
docAux = insDoc(
  xcertificate_generation,
  gLnk(
    "R",
    "&nbsp;Cài đặt tạo chứng chỉ&nbsp;",
    "pages/certificate_generation_settings.htm"
  )
);
docAux = insDoc(
  xcertificate_generation,
  gLnk("R", "&nbsp;Cài đặt lưu trữ khóa&nbsp;", "pages/key_store_settings_.htm")
);
docAux = insDoc(
  xcertificate_generation,
  gLnk("R", "&nbsp;Cài đặt dịch vụ&nbsp;", "pages/service_settings.htm")
);
docAux = insDoc(
  xcertificate_generation,
  gLnk("R", "&nbsp;Cài đặt nâng cao&nbsp;", "pages/advanced_settings1.htm")
);
xpkcs10_csr_creation = insFld(
  xconfiguring_a_go_sign_profile,
  gFld("&nbsp;Tạo PKCS10/CSR&nbsp;", "pages/pkcs10_csr_creation.htm")
);
docAux = insDoc(
  xpkcs10_csr_creation,
  gLnk(
    "R",
    "&nbsp;Cài đặt tạo chứng chỉ&nbsp;",
    "pages/certificate_generation_settings1.htm"
  )
);
docAux = insDoc(
  xpkcs10_csr_creation,
  gLnk("R", "&nbsp;Cài đặt lưu trữ khóa&nbsp;", "pages/key_store_settings1.htm")
);
docAux = insDoc(
  xconfiguring_a_go_sign_profile,
  gLnk(
    "R",
    "&nbsp;Các loại chữ ký được hỗ trợ&nbsp;",
    "pages/supported_signature_type.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_go_sign_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký ứng dụng kinh doanh&nbsp;",
    "pages/registering_business_applications.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_go_sign_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Sử dụng Trình quản lý dịch vụ&nbsp;",
    "pages/go-sign_service_manager_settings1.htm"
  )
);
docAux = insDoc(
  xadss_go_sign_service,
  gLnk("R", "&nbsp;Trình quản lý ngôn ngữ&nbsp;", "pages/language_manager.htm")
);
docAux = insDoc(
  xadss_go_sign_service,
  gLnk(
    "R",
    "&nbsp;Vị trí chữ ký PDF&nbsp;",
    "pages/preferred_sig__locations.htm"
  )
);
docAux = insDoc(
  xadss_go_sign_service,
  gLnk(
    "R",
    "&nbsp;Trình xem nhật ký giao dịch&nbsp;",
    "pages/transactions_log_viewer4.htm"
  )
);
docAux = insDoc(
  xadss_go_sign_service,
  gLnk("R", "&nbsp;Lưu trữ nhật ký&nbsp;", "pages/logs_archiving8.htm")
);
docAux = insDoc(
  xadss_go_sign_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts5.htm")
);
docAux = insDoc(
  xadss_go_sign_service,
  gLnk(
    "R",
    "&nbsp;URL giao diện dịch vụ Go-Sign&nbsp;",
    "pages/go-sign_service_interface_urls.htm"
  )
);
xadss_ras_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ ADSS RAS&nbsp;", "pages/adss_ras_service.htm")
);
xconfiguring_the_ras_service = insFld(
  xadss_ras_service,
  gFld(
    "&nbsp;Định cấu hình Dịch vụ RAS&nbsp;",
    "pages/configuring_the_ras_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ras_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Định cấu hình Cấu hình RAS&nbsp;",
    "pages/step_1___configuring_ras_profile1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ras_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký ứng dụng kinh doanh&nbsp;",
    "pages/step_2___registering_business_applications.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ras_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Định cấu hình Cài đặt Thông báo&nbsp;",
    "pages/step_3___configuring_notification_settings1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ras_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Sử dụng Trình quản lý dịch vụ&nbsp;",
    "pages/step_3___using_the_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_ras_service,
  gLnk(
    "R",
    "&nbsp;Trình xem nhật ký giao dịch&nbsp;",
    "pages/transactions_log_viewer9.htm"
  )
);
docAux = insDoc(
  xadss_ras_service,
  gLnk("R", "&nbsp;Lưu trữ nhật ký&nbsp;", "pages/logs_archiving12.htm")
);
docAux = insDoc(
  xadss_ras_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts10.htm")
);
docAux = insDoc(
  xadss_ras_service,
  gLnk(
    "R",
    "&nbsp;URL giao diện dịch vụ RAS&nbsp;",
    "pages/ras_service_interface_urls.htm"
  )
);
xadss_sam_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ ADSS SAM&nbsp;", "pages/adss_sam_service.htm")
);
xconfiguring_the_sam_service = insFld(
  xadss_sam_service,
  gFld(
    "&nbsp;Định cấu hình Dịch vụ SAM&nbsp;",
    "pages/configuring_the_sam_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_sam_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Cấu hình nguồn mã hóa phần cứng&nbsp;",
    "pages/step_1___configuring_hardware_crypto_source.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_sam_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Configuring&nbsp;SAM&nbsp;Profile&nbsp;",
    "pages/step_5___configuring_sam_profile.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_sam_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Đăng ký ứng dụng kinh doanh&nbsp;",
    "pages/step_6___registering_business_application.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_sam_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Sử dụng Service Manager&nbsp;",
    "pages/step_7___using_service_manager.htm"
  )
);
xregistered_users_ = insFld(
  xadss_sam_service,
  gFld("&nbsp;Người dùng đã đăng ký&nbsp;", "pages/registered_users_.htm")
);
docAux = insDoc(
  xregistered_users_,
  gLnk("R", "&nbsp;Khóa người dùng&nbsp;", "pages/user_keys.htm")
);
docAux = insDoc(
  xregistered_users_,
  gLnk("R", "&nbsp;Thiết bị người dùng&nbsp;", "pages/user_devices.htm")
);
docAux = insDoc(
  xadss_sam_service,
  gLnk(
    "R",
    "&nbsp;Trình xem nhật ký giao dịch&nbsp;",
    "pages/transactions_log_viewer8.htm"
  )
);
docAux = insDoc(
  xadss_sam_service,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/logs_archiving11.htm")
);
docAux = insDoc(
  xadss_sam_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts9.htm")
);
docAux = insDoc(
  xadss_sam_service,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;SAM&nbsp;",
    "pages/sam_service_interface_urls.htm"
  )
);
xadss_csp_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ&nbsp;ADSS&nbsp;CSP&nbsp;", "pages/adss_csp_service.htm")
);
xconfiguring_the_csp_service = insFld(
  xadss_csp_service,
  gFld(
    "&nbsp;Định cấu hình&nbsp;dịch vụ&nbsp;CSP&nbsp;",
    "pages/configuring_the_csp_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_csp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Định cấu hình&nbsp;nguồn tiền&nbsp;điện tử&nbsp;phần cứng&nbsp;",
    "pages/configuring_hardware_crypto_source.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_csp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Định cấu hình&nbsp;cài đặt&nbsp;thông báo&nbsp;",
    "pages/step_2___configuring_notification_settings.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_csp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Định cấu hình&nbsp;Cấu hình&nbsp;CSP&nbsp;",
    "pages/step_3___configuring_csp_profile.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_csp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Đăng ký&nbsp;Ứng dụng&nbsp;Kinh doanh&nbsp;",
    "pages/step_4___registering_business_application.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_csp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;5&nbsp;-&nbsp;Sử dụng&nbsp;trình quản lý&nbsp;dịch vụ&nbsp;",
    "pages/step_5___using_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_csp_service,
  gLnk(
    "R",
    "&nbsp;Người dùng&nbsp;đã đăng ký&nbsp;",
    "pages/registered_users1.htm"
  )
);
docAux = insDoc(
  xadss_csp_service,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/transactions_log_viewer10.htm"
  )
);
docAux = insDoc(
  xadss_csp_service,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/logs_archiving13.htm")
);
docAux = insDoc(
  xadss_csp_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts11.htm")
);
docAux = insDoc(
  xadss_csp_service,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;CSP&nbsp;",
    "pages/csp_service_interface_urls.htm"
  )
);
xuse_cases = insFld(
  xadss_csp_service,
  gFld("&nbsp;Trường hợp&nbsp;sử dụng&nbsp;", "pages/use_cases.htm")
);
docAux = insDoc(
  xuse_cases,
  gLnk(
    "R",
    "&nbsp;Xác thực&nbsp;người dùng&nbsp;CSP&nbsp;",
    "pages/authenticating_csp_users.htm"
  )
);
xtsa_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ&nbsp;ADSS&nbsp;TSA&nbsp;", "pages/tsa_service.htm")
);
xconfiguring_the_tsa_service = insFld(
  xtsa_service,
  gFld(
    "&nbsp;Định cấu hình&nbsp;dịch&nbsp;vụ&nbsp;TSA&nbsp;",
    "pages/configuring_the_tsa_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_tsa_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Tạo&nbsp;khóa&nbsp;và&nbsp;chứng chỉ&nbsp;",
    "pages/generate_keys_and_certificate.htm"
  )
);
xstep_2___configuring_a_profile_to_use_local__external_tsa = insFld(
  xconfiguring_the_tsa_service,
  gFld(
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Định cấu hình&nbsp;hồ sơ&nbsp;TSA&nbsp;",
    "pages/step_2___configuring_a_profile_to_use_local__external_tsa.htm"
  )
);
docAux = insDoc(
  xstep_2___configuring_a_profile_to_use_local__external_tsa,
  gLnk(
    "R",
    "&nbsp;TSA&nbsp;có sẵn&nbsp;công khai&nbsp;",
    "pages/publicly_available_time_stamp_authorities.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_tsa_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Sử dụng&nbsp;trình&nbsp;quản lý&nbsp;dịch vụ&nbsp;",
    "pages/step_3___using_service_manager.htm"
  )
);
docAux = insDoc(
  xtsa_service,
  gLnk("R", "&nbsp;Kiểm soát&nbsp;truy cập&nbsp;", "pages/access_control.htm")
);
docAux = insDoc(
  xtsa_service,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/transactions_log_viewer6.htm"
  )
);
docAux = insDoc(
  xtsa_service,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/logs_archiving.htm")
);
docAux = insDoc(
  xtsa_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts.htm")
);
xmanagement_reporting = insFld(
  xtsa_service,
  gFld("&nbsp;Báo cáo&nbsp;quản lý&nbsp;", "pages/management_reporting.htm")
);
docAux = insDoc(
  xmanagement_reporting,
  gLnk("R", "&nbsp;Báo cáo&nbsp;dịch vụ&nbsp;", "pages/service_report5.htm")
);
docAux = insDoc(
  xmanagement_reporting,
  gLnk("R", "&nbsp;Báo cáo&nbsp;sử dụng&nbsp;", "pages/usage_report6.htm")
);
docAux = insDoc(
  xmanagement_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;hồ sơ&nbsp;TSA&nbsp;",
    "pages/profiles_report.htm"
  )
);
docAux = insDoc(
  xmanagement_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;thống kê&nbsp;dịch vụ&nbsp;",
    "pages/service_statistical_report1.htm"
  )
);
docAux = insDoc(
  xtsa_service,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;dấu thời gian&nbsp;",
    "pages/service_urls4.htm"
  )
);
docAux = insDoc(
  xtsa_service,
  gLnk(
    "R",
    "&nbsp;Tối ưu hóa&nbsp;hiệu suất&nbsp;máy chủ&nbsp;ADSS&nbsp;TSA&nbsp;",
    "pages/optimising_adss_tsa_server_.htm"
  )
);
xadss_server___verification_service4 = insFld(
  foldersTree,
  gFld(
    "&nbsp;Dịch vụ&nbsp;xác minh&nbsp;ADSS&nbsp;",
    "pages/adss_server_-_verification_service4.htm"
  )
);
xconfiguring_the_verification_service2 = insFld(
  xadss_server___verification_service4,
  gFld(
    "&nbsp;Định cấu hình&nbsp;dịch&nbsp;vụ&nbsp;xác minh&nbsp;",
    "pages/configuring_the_verification_service2.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_verification_service2,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Tạo&nbsp;khóa&nbsp;và&nbsp;chứng chỉ&nbsp;",
    "pages/step_1_-_generating_keys_certificates_using_the_key_manager.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_verification_service2,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký&nbsp;CAs&nbsp;",
    "pages/step_2_-_registering_cas_using_the_trust_manager.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_verification_service2,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Định cấu hình&nbsp;màn hình&nbsp;CRL&nbsp;",
    "pages/step_3_-_check_the_crl_manager_service_is_running.htm"
  )
);
xverification_profiles = insFld(
  xconfiguring_the_verification_service2,
  gFld(
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Định cấu hình&nbsp;hồ sơ&nbsp;xác minh&nbsp;",
    "pages/verification_profiles.htm"
  )
);
docAux = insDoc(
  xverification_profiles,
  gLnk("R", "&nbsp;Cài đặt&nbsp;chung&nbsp;", "pages/general_settings2.htm")
);
docAux = insDoc(
  xverification_profiles,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;tin cậy&nbsp;Anchor&nbsp;",
    "pages/step_1a_-_trust_anchor_settings.htm"
  )
);
docAux = insDoc(
  xverification_profiles,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;chữ ký&nbsp;",
    "pages/step_1b_-_signature_settings.htm"
  )
);
docAux = insDoc(
  xverification_profiles,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;thuật toán&nbsp;",
    "pages/algorithms_settings.htm"
  )
);
docAux = insDoc(
  xverification_profiles,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;khám phá&nbsp;đường dẫn&nbsp;",
    "pages/step_1c_-_path_discovery_settings.htm"
  )
);
docAux = insDoc(
  xverification_profiles,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;xác thực&nbsp;đường dẫn&nbsp;",
    "pages/step_1d_-_path_validation_settings.htm"
  )
);
docAux = insDoc(
  xverification_profiles,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;nâng cao&nbsp;",
    "pages/step_1e_-_advanced_settings.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_verification_service2,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;5&nbsp;-&nbsp;Định cấu hình&nbsp;chất lượng&nbsp;chữ ký&nbsp;&nbsp;",
    "pages/signature_quality_configuration.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_verification_service2,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;6&nbsp;-&nbsp;Đăng ký&nbsp;ứng dụng&nbsp;kinh doanh&nbsp;",
    "pages/step_4_-_registering_business_application.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_verification_service2,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;7&nbsp;-&nbsp;Sử dụng&nbsp;trình&nbsp;quản lý&nbsp;dịch vụ&nbsp;",
    "pages/using_verification_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_server___verification_service4,
  gLnk(
    "R",
    "&nbsp;Xác thực&nbsp;và&nbsp;tăng cường&nbsp;chữ ký&nbsp;hiện có&nbsp;",
    "pages/validating_and_enhancing_existing_signatures.htm"
  )
);
docAux = insDoc(
  xadss_server___verification_service4,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/verification_transactions_log.htm"
  )
);
docAux = insDoc(
  xadss_server___verification_service4,
  gLnk(
    "R",
    "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;",
    "pages/verification_logs_archiving.htm"
  )
);
docAux = insDoc(
  xadss_server___verification_service4,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/verification_alerts.htm")
);
xverification_management_reporting = insFld(
  xadss_server___verification_service4,
  gFld(
    "&nbsp;Báo cáo&nbsp;quản lý&nbsp;xác minh&nbsp;",
    "pages/verification_management_reporting.htm"
  )
);
docAux = insDoc(
  xverification_management_reporting,
  gLnk("R", "&nbsp;Báo cáo&nbsp;dịch vụ&nbsp;", "pages/service_separate.htm")
);
docAux = insDoc(
  xverification_management_reporting,
  gLnk("R", "&nbsp;Báo cáo&nbsp;sử dụng&nbsp;", "pages/usage_report3.htm")
);
docAux = insDoc(
  xverification_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;CA&nbsp;mục tiêu&nbsp;",
    "pages/target_ca_report.htm"
  )
);
docAux = insDoc(
  xadss_server___verification_service4,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;xác minh&nbsp;",
    "pages/service_urls2.htm"
  )
);
xocsp_monitor = insFld(
  foldersTree,
  gFld("&nbsp;Màn hình&nbsp;ADSS&nbsp;OCSP&nbsp;", "pages/ocsp_monitor.htm")
);
docAux = insDoc(
  xocsp_monitor,
  gLnk("R", "&nbsp;Quản lý&nbsp;dịch vụ&nbsp;", "pages/sevice_manager.htm")
);
docAux = insDoc(
  xocsp_monitor,
  gLnk(
    "R",
    "&nbsp;Các trường hợp&nbsp;thử nghiệm&nbsp;",
    "pages/test_cases.htm"
  )
);
docAux = insDoc(
  xocsp_monitor,
  gLnk("R", "&nbsp;Kịch bản&nbsp;thử nghiệm&nbsp;", "pages/test_scenarios.htm")
);
docAux = insDoc(
  xocsp_monitor,
  gLnk("R", "&nbsp;Báo cáo&nbsp;trực tiếp&nbsp;", "pages/live_report.htm")
);
docAux = insDoc(
  xocsp_monitor,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/transactions_log_viewer2.htm"
  )
);
docAux = insDoc(
  xocsp_monitor,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/logs_archiving4.htm")
);
docAux = insDoc(
  xocsp_monitor,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts4.htm")
);
xmanagement_reporting4 = insFld(
  xocsp_monitor,
  gFld("&nbsp;Báo cáo&nbsp;quản lý&nbsp;", "pages/management_reporting4.htm")
);
docAux = insDoc(
  xmanagement_reporting4,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;cảnh báo&nbsp;mới nhất&nbsp;",
    "pages/last_warning_report.htm"
  )
);
docAux = insDoc(
  xmanagement_reporting4,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;tóm tắt&nbsp;kịch bản&nbsp;mới nhất&nbsp;",
    "pages/last_daily_summary_report.htm"
  )
);
xocsp_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ&nbsp;ADSS&nbsp;OCSP&nbsp;", "pages/ocsp_service.htm")
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;Hỗ trợ&nbsp;cho&nbsp;nhiều&nbsp;mô hình&nbsp;tin cậy&nbsp;",
    "pages/support_for_multiple_trust_models.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;Chính sách&nbsp;xác thực&nbsp;nhiều CA&nbsp;và&nbsp;chứng chỉ&nbsp;duy&nbsp;nhất&nbsp;",
    "pages/multiple_ca_and_unique_certificate_validation_policies.htm"
  )
);
xconfiguring_the_ocsp_service = insFld(
  xocsp_service,
  gFld(
    "&nbsp;Định cấu hình&nbsp;dịch&nbsp;vụ&nbsp;OCSP&nbsp;",
    "pages/configuring_the_ocsp_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ocsp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1-&nbsp;Tạo&nbsp;khóa&nbsp;và&nbsp;chứng chỉ&nbsp;",
    "pages/step_1-_generating_keys_certificates.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ocsp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký&nbsp;CA&nbsp;",
    "pages/step_2_-_registering_cas_in_trust_manager.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ocsp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Đăng ký&nbsp;CA&nbsp;đáng tin cậy&nbsp;cho&nbsp;dịch vụ&nbsp;OCSP&nbsp;",
    "pages/step_3_-_register_trusted_cas_for_ocsp_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ocsp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Cấu hình&nbsp;màn hình&nbsp;CLR&nbsp;",
    "pages/step_4___check_the_crl_manager_service_is_running.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ocsp_service,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;5&nbsp;-&nbsp;Sử dụng&nbsp;trình&nbsp;quản lý&nbsp;dịch vụ&nbsp;",
    "pages/using_ocsp_service_manager.htm"
  )
);
xadvanced_settings = insFld(
  xocsp_service,
  gFld("&nbsp;Cài đặt&nbsp;nâng cao&nbsp;", "pages/advanced_settings.htm")
);
docAux = insDoc(
  xadvanced_settings,
  gLnk(
    "R",
    "&nbsp;Xử lý&nbsp;yêu cầu&nbsp;OCSP&nbsp;",
    "pages/ocsp_request_handling.htm"
  )
);
docAux = insDoc(
  xadvanced_settings,
  gLnk(
    "R",
    "&nbsp;Chính sách&nbsp;OCSP&nbsp;mặc định&nbsp;",
    "pages/default_ocsp_policy2.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk("R", "&nbsp;Chế độ&nbsp;chuyển tiếp&nbsp;", "pages/manual_routing.htm")
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;Kiểm soát&nbsp;truy cập&nbsp;",
    "pages/ocsp_access_control.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/reviewing_ocsp_tranasaction_logs.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/ocsp_logs_archiving.htm")
);
docAux = insDoc(
  xocsp_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/ocsp_alerts.htm")
);
xocsp_management_reporting = insFld(
  xocsp_service,
  gFld(
    "&nbsp;Báo cáo&nbsp;quản lý&nbsp;",
    "pages/ocsp_management_reporting.htm"
  )
);
docAux = insDoc(
  xocsp_management_reporting,
  gLnk("R", "&nbsp;Báo cáo&nbsp;dịch vụ&nbsp;", "pages/service_report4.htm")
);
docAux = insDoc(
  xocsp_management_reporting,
  gLnk("R", "&nbsp;Báo cáo&nbsp;sử dụng&nbsp;", "pages/usage_report5.htm")
);
docAux = insDoc(
  xocsp_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;CA&nbsp;mục tiêu&nbsp;",
    "pages/target_ca_report4.htm"
  )
);
docAux = insDoc(
  xocsp_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;yêu cầu&nbsp;hàng ngày&nbsp;",
    "pages/daily_request_report.htm"
  )
);
docAux = insDoc(
  xocsp_management_reporting,
  gLnk(
    "R",
    "&nbsp;Báo cáo&nbsp;thống kê&nbsp;dịch vụ&nbsp;&nbsp;",
    "pages/service_statistical_report_.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;Tối ưu hóa&nbsp;hiệu suất&nbsp;máy chủ&nbsp;ADSS&nbsp;OCSP&nbsp;",
    "pages/configuring_adss_server_for_high_speed_ocsp_responses.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;Vận hành&nbsp;dịch vụ&nbsp;OCSP&nbsp;ở&nbsp;Chế độ&nbsp;tuân thủ&nbsp;FIPS&nbsp;201&nbsp;",
    "pages/operating_the_ocsp_service_in_fips_201_compliant_mode.htm"
  )
);
docAux = insDoc(
  xocsp_service,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;OCSP&nbsp;",
    "pages/service_urls3.htm"
  )
);
xadss_scvp_service1 = insFld(
  foldersTree,
  gFld(
    "&nbsp;Dịch vụ&nbsp;ADSS&nbsp;SCVP&nbsp;",
    "pages/adss_scvp_service1.htm"
  )
);
xconfiguring_the_scvp_service1 = insFld(
  xadss_scvp_service1,
  gFld(
    "&nbsp;Định&nbsp;cấu hình&nbsp;Dịch vụ&nbsp;SCVP&nbsp;",
    "pages/configuring_the_scvp_service1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_scvp_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Tạo&nbsp;khóa&nbsp;và&nbsp;chứng chỉ&nbsp;",
    "pages/step_1_-_generate_key_and_certificate1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_scvp_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký&nbsp;CAs&nbsp;bằng&nbsp;trình quản lý&nbsp;tin cậy&nbsp;",
    "pages/step_2_-_register_cas_using_trust_manager.htm"
  )
);
xstep_2___configuring_scvp_validation_policy_ = insFld(
  xconfiguring_the_scvp_service1,
  gFld(
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Định&nbsp;cấu hình&nbsp;chính sách&nbsp;xác thực&nbsp;SCVP&nbsp;&nbsp;",
    "pages/step_2_-_configuring_scvp_validation_policy_.htm"
  )
);
docAux = insDoc(
  xstep_2___configuring_scvp_validation_policy_,
  gLnk("R", "&nbsp;Cài đặt&nbsp;chung&nbsp;", "pages/general_settings1.htm")
);
docAux = insDoc(
  xstep_2___configuring_scvp_validation_policy_,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;Trust&nbsp;Anchor&nbsp;",
    "pages/trust_anchor_settings.htm"
  )
);
docAux = insDoc(
  xstep_2___configuring_scvp_validation_policy_,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;khám phá&nbsp;đường dẫn&nbsp;",
    "pages/path_discovery_settings.htm"
  )
);
docAux = insDoc(
  xstep_2___configuring_scvp_validation_policy_,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;xác thực&nbsp;đường dẫn&nbsp;",
    "pages/path_validation_settings.htm"
  )
);
docAux = insDoc(
  xstep_2___configuring_scvp_validation_policy_,
  gLnk("R", "&nbsp;Cài đặt&nbsp;nâng cao&nbsp;", "pages/advanced_settings3.htm")
);
docAux = insDoc(
  xconfiguring_the_scvp_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;4&nbsp;-&nbsp;Định cấu hình&nbsp;màn hình&nbsp;CRL&nbsp;",
    "pages/crl_monitor1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_scvp_service1,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;5&nbsp;-&nbsp;Cài đặt&nbsp;trình quản lý&nbsp;dịch vụ&nbsp;SCVP&nbsp;",
    "pages/using_scvp_service_manager_.htm"
  )
);
docAux = insDoc(
  xadss_scvp_service1,
  gLnk("R", "&nbsp;Kiểm soát&nbsp;truy cập&nbsp;", "pages/access_control4.htm")
);
docAux = insDoc(
  xadss_scvp_service1,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/transactions_log_viewer3.htm"
  )
);
docAux = insDoc(
  xadss_scvp_service1,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/logs_archiving6.htm")
);
docAux = insDoc(
  xadss_scvp_service1,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/alerts2.htm")
);
xmanagement_reporting1 = insFld(
  xadss_scvp_service1,
  gFld("&nbsp;Báo cáo&nbsp;quản lý&nbsp;", "pages/management_reporting1.htm")
);
docAux = insDoc(
  xmanagement_reporting1,
  gLnk("R", "&nbsp;Báo cáo&nbsp;dịch vụ&nbsp;", "pages/service_report1.htm")
);
docAux = insDoc(
  xmanagement_reporting1,
  gLnk("R", "&nbsp;Báo cáo&nbsp;sử dụng&nbsp;", "pages/usage_report1.htm")
);
docAux = insDoc(
  xmanagement_reporting1,
  gLnk("R", "&nbsp;CA&nbsp;mục tiêu&nbsp;", "pages/target_cas.htm")
);
docAux = insDoc(
  xadss_scvp_service1,
  gLnk(
    "R",
    "&nbsp;Vận hành&nbsp;dịch vụ&nbsp;SCVP&nbsp;ở&nbsp;chế độ&nbsp;tuân&nbsp;thủ&nbsp;FIPS&nbsp;201&nbsp;",
    "pages/operating_the_scvp_service_in_fips_201_compliant_mode.htm"
  )
);
docAux = insDoc(
  xadss_scvp_service1,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;SCVP&nbsp;",
    "pages/scvp_service_interface_urls.htm"
  )
);
xadss_xkms_service = insFld(
  foldersTree,
  gFld("&nbsp;Dịch vụ&nbsp;ADSS&nbsp;XKMS&nbsp;", "pages/adss_xkms_service.htm")
);
xconfiguring_the_xkms_service3 = insFld(
  xadss_xkms_service,
  gFld(
    "&nbsp;Định&nbsp;cấu hình&nbsp;dịch vụ&nbsp;XKMS&nbsp;",
    "pages/configuring_the_xkms_service3.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_xkms_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;1&nbsp;-&nbsp;Tạo&nbsp;khóa&nbsp;và&nbsp;chứng chỉ&nbsp;",
    "pages/step_1_-_generate_key_and_certificate.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_xkms_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;2&nbsp;-&nbsp;Đăng ký&nbsp;CA&nbsp;",
    "pages/step_2_-_register_cas_in_trust_manager.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_xkms_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;3&nbsp;-&nbsp;Định cấu hình&nbsp;màn hình&nbsp;CRL&nbsp;",
    "pages/step_4_-_configuring_crl_monitor_and_or_ocsp_service.htm"
  )
);
xstep_3___configuring_xkms_profile = insFld(
  xconfiguring_the_xkms_service3,
  gFld(
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Định cấu hình&nbsp;cấu hình&nbsp;XKMS&nbsp;",
    "pages/step_3_-_configuring_xkms_profile.htm"
  )
);
docAux = insDoc(
  xstep_3___configuring_xkms_profile,
  gLnk("R", "&nbsp;Cài đặt&nbsp;chung&nbsp;", "pages/general_settings3.htm")
);
docAux = insDoc(
  xstep_3___configuring_xkms_profile,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;Trust&nbsp;Anchor&nbsp;",
    "pages/step_3a_-_trust_anchor_settings1.htm"
  )
);
docAux = insDoc(
  xstep_3___configuring_xkms_profile,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;khám phá&nbsp;đường dẫn&nbsp;",
    "pages/step_3b_-_path_discovery_settings1.htm"
  )
);
docAux = insDoc(
  xstep_3___configuring_xkms_profile,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;xác thực&nbsp;đường dẫn&nbsp;",
    "pages/step_3c_-_certificate_validation_settings1.htm"
  )
);
docAux = insDoc(
  xstep_3___configuring_xkms_profile,
  gLnk(
    "R",
    "&nbsp;Cài đặt&nbsp;nâng cao&nbsp;",
    "pages/step_3d_-_advanced_settings1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_xkms_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;5&nbsp;-&nbsp;Đăng ký&nbsp;ứng dụng&nbsp;kinh doanh&nbsp;",
    "pages/a.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_xkms_service3,
  gLnk(
    "R",
    "&nbsp;Bước&nbsp;6&nbsp;-&nbsp;Sử dụng&nbsp;trình&nbsp;quản lý&nbsp;dịch vụ&nbsp;",
    "pages/step_3_-_using_xkms_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_xkms_service,
  gLnk(
    "R",
    "&nbsp;Trình xem&nbsp;nhật ký&nbsp;giao dịch&nbsp;",
    "pages/transactions_log_viewer.htm"
  )
);
docAux = insDoc(
  xadss_xkms_service,
  gLnk("R", "&nbsp;Lưu trữ&nbsp;nhật ký&nbsp;", "pages/logs_archiving1.htm")
);
docAux = insDoc(
  xadss_xkms_service,
  gLnk("R", "&nbsp;Cảnh báo&nbsp;", "pages/xkms_alerts.htm")
);
xmanagement_reporting3 = insFld(
  xadss_xkms_service,
  gFld("&nbsp;Báo cáo&nbsp;quản lý&nbsp;", "pages/management_reporting3.htm")
);
docAux = insDoc(
  xmanagement_reporting3,
  gLnk("R", "&nbsp;Báo cáo&nbsp;dịch vụ&nbsp;", "pages/service_report7.htm")
);
docAux = insDoc(
  xmanagement_reporting3,
  gLnk("R", "&nbsp;Báo cáo&nbsp;sử dụng&nbsp;", "pages/usage_report8.htm")
);
docAux = insDoc(
  xmanagement_reporting3,
  gLnk("R", "&nbsp;CA&nbsp;mục tiêu&nbsp;", "pages/target_cas1.htm")
);
docAux = insDoc(
  xadss_xkms_service,
  gLnk(
    "R",
    "&nbsp;URL&nbsp;giao diện&nbsp;dịch vụ&nbsp;XKMS&nbsp;",
    "pages/service_urls5.htm"
  )
);
xadss_ltan_service = insFld(
  foldersTree,
  gFld("&nbsp;ADSS&nbsp;LTANS&nbsp;Service&nbsp;", "adss_ltan_service.htm")
);
xconfiguring_the_ltan_service1 = insFld(
  xadss_ltan_service,
  gFld(
    "&nbsp;Configuring&nbsp;the&nbsp;LTANS&nbsp;Service&nbsp;",
    "configuring_the_ltan_service1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ltan_service1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1&nbsp;-&nbsp;Registering&nbsp;Timestamping&nbsp;Authorities&nbsp;",
    "step_2_-_registering_timestamping_authorities.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ltan_service1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Configuring&nbsp;LTANS&nbsp;Profile&nbsp;",
    "step_3_-_configuring_ltan_profile(s).htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ltan_service1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;Registering&nbsp;Business&nbsp;Applications&nbsp;",
    "step_1_-_register_client_applications.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_ltan_service1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Using&nbsp;LTANS&nbsp;Service&nbsp;Manager&nbsp;",
    "step_4_-_using_ltan_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_ltan_service,
  gLnk("R", "&nbsp;Archive&nbsp;Data&nbsp;Log&nbsp;", "archive_data.htm")
);
docAux = insDoc(
  xadss_ltan_service,
  gLnk(
    "R",
    "&nbsp;Transactions&nbsp;Log&nbsp;Viewer&nbsp;",
    "transactions_log_viewer1.htm"
  )
);
docAux = insDoc(
  xadss_ltan_service,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving2.htm")
);
docAux = insDoc(
  xadss_ltan_service,
  gLnk("R", "&nbsp;Alerts&nbsp;", "ltan_alerts.htm")
);
xmanagement_reporting2 = insFld(
  xadss_ltan_service,
  gFld("&nbsp;Management&nbsp;Reporting&nbsp;", "management_reporting2.htm")
);
docAux = insDoc(
  xmanagement_reporting2,
  gLnk("R", "&nbsp;Service&nbsp;Report&nbsp;", "service_report6.htm")
);
docAux = insDoc(
  xmanagement_reporting2,
  gLnk("R", "&nbsp;Usage&nbsp;Report&nbsp;", "usage_report7.htm")
);
docAux = insDoc(
  xmanagement_reporting2,
  gLnk(
    "R",
    "&nbsp;LTANS&nbsp;Profile&nbsp;Report&nbsp;",
    "ltans_profile_report.htm"
  )
);
docAux = insDoc(
  xadss_ltan_service,
  gLnk(
    "R",
    "&nbsp;LTANS&nbsp;Service&nbsp;Interface&nbsp;URLs&nbsp;",
    "service_urls6.htm"
  )
);
xadss_hmac_service2 = insFld(
  foldersTree,
  gFld("&nbsp;ADSS&nbsp;HMAC&nbsp;Service&nbsp;", "adss_hmac_service2.htm")
);
xconfiguring_the_hmac_service = insFld(
  xadss_hmac_service2,
  gFld(
    "&nbsp;Configuring&nbsp;the&nbsp;HMAC&nbsp;Service&nbsp;",
    "configuring_the_hmac_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_hmac_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1&nbsp;-&nbsp;Generating&nbsp;HMAC&nbsp;Keys&nbsp;",
    "step_1___generating_key_and_certificate.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_hmac_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Configuring&nbsp;HMAC&nbsp;Profile&nbsp;",
    "step_2___configuring_hmac_profile.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_hmac_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;Using&nbsp;the&nbsp;Service&nbsp;Manager&nbsp;",
    "step_3___using_the_service_manager1.htm"
  )
);
docAux = insDoc(
  xadss_hmac_service2,
  gLnk(
    "R",
    "&nbsp;Transactions&nbsp;Log&nbsp;Viewer&nbsp;",
    "transactions_log_viewer11.htm"
  )
);
docAux = insDoc(
  xadss_hmac_service2,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving14.htm")
);
docAux = insDoc(
  xadss_hmac_service2,
  gLnk("R", "&nbsp;Alerts&nbsp;", "alerts12.htm")
);
xadss_decryption_service = insFld(
  foldersTree,
  gFld(
    "&nbsp;ADSS&nbsp;Decryption&nbsp;Service&nbsp;",
    "adss_decryption_service.htm"
  )
);
xconfiguring_the_decryption_service = insFld(
  xadss_decryption_service,
  gFld(
    "&nbsp;Configuring&nbsp;the&nbsp;Decryption&nbsp;Service&nbsp;",
    "configuring_the_decryption_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_decryption_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1&nbsp;-&nbsp;Generating&nbsp;Keys&nbsp;and&nbsp;Certificates&nbsp;",
    "generating_keys_and_certificate.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_decryption_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Configuring&nbsp;Decryption&nbsp;Profile&nbsp;",
    "step_2_-_configuring_decryption_profile(s).htm"
  )
);
docAux = insDoc(
  xconfiguring_the_decryption_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;Registering&nbsp;Business&nbsp;Applications&nbsp;",
    "step_1_-_registering_business_application.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_decryption_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Using&nbsp;the&nbsp;Service&nbsp;Manager&nbsp;",
    "steps_3_-_using_decryption_service.htm"
  )
);
docAux = insDoc(
  xadss_decryption_service,
  gLnk(
    "R",
    "&nbsp;Transactions&nbsp;Log&nbsp;Viewer&nbsp;",
    "transaction_log_viewer.htm"
  )
);
docAux = insDoc(
  xadss_decryption_service,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving3.htm")
);
docAux = insDoc(
  xadss_decryption_service,
  gLnk("R", "&nbsp;Alerts&nbsp;", "decryption_alerts.htm")
);
docAux = insDoc(
  xadss_decryption_service,
  gLnk(
    "R",
    "&nbsp;Decryption&nbsp;Interface&nbsp;URLs&nbsp;",
    "decryption_interface_urls.htm"
  )
);
xadss_ocsp_repeater_service = insFld(
  foldersTree,
  gFld(
    "&nbsp;ADSS&nbsp;OCSP&nbsp;Repeater&nbsp;Service&nbsp;",
    "adss_ocsp_repeater_service.htm"
  )
);
xconfiguring_ocsp_repeater = insFld(
  xadss_ocsp_repeater_service,
  gFld(
    "&nbsp;Configuring&nbsp;an&nbsp;OCSP&nbsp;Repeater&nbsp;",
    "configuring_ocsp_repeater.htm"
  )
);
docAux = insDoc(
  xconfiguring_ocsp_repeater,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1&nbsp;-&nbsp;Generating&nbsp;Keys&nbsp;and&nbsp;Certificates&nbsp;",
    "step_1___generating_keys_and_certificates.htm"
  )
);
docAux = insDoc(
  xconfiguring_ocsp_repeater,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Registering&nbsp;CAs&nbsp;",
    "step_2___registering_cas.htm"
  )
);
docAux = insDoc(
  xconfiguring_ocsp_repeater,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;Configuring&nbsp;CRL&nbsp;Monitor&nbsp;",
    "step_5___configuring_crl_monitor.htm"
  )
);
docAux = insDoc(
  xconfiguring_ocsp_repeater,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Configuring&nbsp;OCSP&nbsp;Repeater&nbsp;Service&nbsp;",
    "step_3___configuring_d_ocsp_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_ocsp_repeater,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;5&nbsp;-&nbsp;Registering&nbsp;Trusted&nbsp;CAs&nbsp;for&nbsp;OCSP&nbsp;Repeater&nbsp;Service&nbsp;",
    "step_4___registering_trusted_cas_for_ocsp_repeater_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_ocsp_repeater,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;6&nbsp;-&nbsp;Using&nbsp;the&nbsp;Service&nbsp;Manager&nbsp;",
    "step_6___using_the_service_manager.htm"
  )
);
docAux = insDoc(
  xadss_ocsp_repeater_service,
  gLnk(
    "R",
    "&nbsp;OCSP&nbsp;Repeater&nbsp;Access&nbsp;Control&nbsp;",
    "ocsp_repeater_access_control.htm"
  )
);
docAux = insDoc(
  xadss_ocsp_repeater_service,
  gLnk(
    "R",
    "&nbsp;Transactions&nbsp;Log&nbsp;Viewer&nbsp;",
    "transactions_log_viewer7.htm"
  )
);
docAux = insDoc(
  xadss_ocsp_repeater_service,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving7.htm")
);
docAux = insDoc(
  xadss_ocsp_repeater_service,
  gLnk("R", "&nbsp;Alerts&nbsp;", "alerts7.htm")
);
xmanagement_reporting5 = insFld(
  xadss_ocsp_repeater_service,
  gFld("&nbsp;Management&nbsp;Reporting&nbsp;", "management_reporting5.htm")
);
docAux = insDoc(
  xmanagement_reporting5,
  gLnk("R", "&nbsp;Service&nbsp;Report&nbsp;", "service_report8.htm")
);
docAux = insDoc(
  xmanagement_reporting5,
  gLnk("R", "&nbsp;Usage&nbsp;Report&nbsp;", "usage_report9.htm")
);
docAux = insDoc(
  xmanagement_reporting5,
  gLnk("R", "&nbsp;Target&nbsp;CA&nbsp;Report&nbsp;", "target_ca_report1.htm")
);
docAux = insDoc(
  xadss_ocsp_repeater_service,
  gLnk(
    "R",
    "&nbsp;OCSP&nbsp;Repeater&nbsp;Service&nbsp;Interface&nbsp;URLs&nbsp;",
    "ocsp_repeater_service_interface_urls.htm"
  )
);
xadss_npkd_service = insFld(
  foldersTree,
  gFld("&nbsp;ADSS&nbsp;NPKD&nbsp;Service&nbsp;", "adss_npkd_service.htm")
);
xconfiguring_the_npkd_service = insFld(
  xadss_npkd_service,
  gFld(
    "&nbsp;Configuring&nbsp;the&nbsp;NPKD&nbsp;Service&nbsp;",
    "configuring_the_npkd_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_npkd_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1-&nbsp;Configuring&nbsp;ICAO&nbsp;PKD&nbsp;Upload&nbsp;Settings&nbsp;",
    "step_1__configuring_icao_pkd_upload_settings.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_npkd_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Configuring&nbsp;ICAO&nbsp;PKD&nbsp;Download&nbsp;Settings&nbsp;",
    "step_2___configuring_icao_pkd_download_settings.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_npkd_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;Registering&nbsp;Business&nbsp;Application&nbsp;",
    "step_3___registering_business_application.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_npkd_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Using&nbsp;the&nbsp;Service&nbsp;Manager&nbsp;",
    "step_3___using_the_service_manager2.htm"
  )
);
docAux = insDoc(
  xadss_npkd_service,
  gLnk("R", "&nbsp;Manual&nbsp;Download&nbsp;", "manual_download.htm")
);
xmanage_certificates = insFld(
  xadss_npkd_service,
  gFld("&nbsp;Manage&nbsp;Certificates&nbsp;", "manage_certificates.htm")
);
docAux = insDoc(
  xmanage_certificates,
  gLnk("R", "&nbsp;CSCA&nbsp;Certificates&nbsp;", "csca_certificates.htm")
);
docAux = insDoc(
  xmanage_certificates,
  gLnk("R", "&nbsp;DS&nbsp;Certificates&nbsp;", "ds_certificates.htm")
);
docAux = insDoc(
  xadss_npkd_service,
  gLnk("R", "&nbsp;Manage&nbsp;CRLs&nbsp;", "manage_crls.htm")
);
xmaster_lists = insFld(
  xadss_npkd_service,
  gFld("&nbsp;Master&nbsp;Lists&nbsp;", "master_lists.htm")
);
docAux = insDoc(
  xmaster_lists,
  gLnk(
    "R",
    "&nbsp;Domestic&nbsp;Master&nbsp;Lists&nbsp;",
    "domestic_master_lists.htm"
  )
);
docAux = insDoc(
  xmaster_lists,
  gLnk(
    "R",
    "&nbsp;Foreign&nbsp;Master&nbsp;Lists&nbsp;",
    "foreign_master_lists.htm"
  )
);
docAux = insDoc(
  xmaster_lists,
  gLnk("R", "&nbsp;Signing&nbsp;Settings&nbsp;", "signing_settings.htm")
);
docAux = insDoc(
  xadss_npkd_service,
  gLnk(
    "R",
    "&nbsp;Transaction&nbsp;Log&nbsp;Viewer&nbsp;",
    "transaction_log_viewer1.htm"
  )
);
docAux = insDoc(
  xadss_npkd_service,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving10.htm")
);
docAux = insDoc(
  xadss_npkd_service,
  gLnk("R", "&nbsp;Alerts&nbsp;", "alerts8.htm")
);
xadss_spoc_service = insFld(
  foldersTree,
  gFld("&nbsp;ADSS&nbsp;SPOC&nbsp;Service&nbsp;", "adss_spoc_service.htm")
);
xconfiguring_the_spoc_service = insFld(
  xadss_spoc_service,
  gFld(
    "&nbsp;Configuring&nbsp;the&nbsp;SPOC&nbsp;Service&nbsp;",
    "configuring_the_spoc_service.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_spoc_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1-&nbsp;Using&nbsp;the&nbsp;Service&nbsp;Manager&nbsp;",
    "configuring_service_manager.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_spoc_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Configure&nbsp;CVCA&nbsp;",
    "step_1____configure_cvca1.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_spoc_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;Configure&nbsp;Foreign&nbsp;SPOC&nbsp;",
    "step_3___configure_foreign_spoc.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_spoc_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Configuring&nbsp;SPOC&nbsp;Profile&nbsp;",
    "configuring_spoc_profile.htm"
  )
);
docAux = insDoc(
  xconfiguring_the_spoc_service,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;5&nbsp;-&nbsp;Registering&nbsp;Business&nbsp;Application&nbsp;",
    "step_3___registering_business_application1.htm"
  )
);
xmanage_requests = insFld(
  xadss_spoc_service,
  gFld("&nbsp;Manage&nbsp;Requests&nbsp;", "manage_requests.htm")
);
docAux = insDoc(
  xmanage_requests,
  gLnk("R", "&nbsp;Domestic&nbsp;Requests&nbsp;", "domestic_request.htm")
);
docAux = insDoc(
  xmanage_requests,
  gLnk("R", "&nbsp;Foreign&nbsp;Requests&nbsp;", "foreign_requests.htm")
);
docAux = insDoc(
  xmanage_requests,
  gLnk("R", "&nbsp;Declined&nbsp;Requests&nbsp;", "declined_requests3.htm")
);
xmanage_certificates1 = insFld(
  xadss_spoc_service,
  gFld("&nbsp;Manage&nbsp;Certificates&nbsp;", "manage_certificates1.htm")
);
docAux = insDoc(
  xmanage_certificates1,
  gLnk(
    "R",
    "&nbsp;Domestic&nbsp;Certificates&nbsp;",
    "domestic_certificates.htm"
  )
);
docAux = insDoc(
  xmanage_certificates1,
  gLnk("R", "&nbsp;Foreign&nbsp;Certificates&nbsp;", "foreign_certificates.htm")
);
xgeneral_messages = insFld(
  xadss_spoc_service,
  gFld("&nbsp;General&nbsp;Messages&nbsp;", "general_messages.htm")
);
docAux = insDoc(
  xgeneral_messages,
  gLnk("R", "&nbsp;Received&nbsp;Messages&nbsp;", "received_messages.htm")
);
docAux = insDoc(
  xgeneral_messages,
  gLnk("R", "&nbsp;Sent&nbsp;Messages&nbsp;", "sent_messages.htm")
);
docAux = insDoc(
  xadss_spoc_service,
  gLnk(
    "R",
    "&nbsp;Transactions&nbsp;Log&nbsp;Viewer&nbsp;",
    "transactions_log_viewer12.htm"
  )
);
docAux = insDoc(
  xadss_spoc_service,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving15.htm")
);
docAux = insDoc(
  xadss_spoc_service,
  gLnk("R", "&nbsp;Alerts&nbsp;", "alerts13.htm")
);
xmanage_cas = insFld(
  foldersTree,
  gFld("&nbsp;Manage&nbsp;CAs&nbsp;", "manage_cas.htm")
);
docAux = insDoc(
  xmanage_cas,
  gLnk("R", "&nbsp;Local&nbsp;CAs&nbsp;", "configuring_the_adss_ca_module.htm")
);
xview_crls = insFld(
  xmanage_cas,
  gFld("&nbsp;View&nbsp;CRLs&nbsp;", "view_crls.htm")
);
docAux = insDoc(
  xview_crls,
  gLnk(
    "R",
    "&nbsp;View&nbsp;CRL&nbsp;Latest&nbsp;Contents&nbsp;",
    "view_crl_latest_contents.htm"
  )
);
xconfiguring_an_external_ca = insFld(
  xmanage_cas,
  gFld("&nbsp;External&nbsp;CAs&nbsp;", "configuring_an_external_ca.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;ADSS&nbsp;CA&nbsp;Server&nbsp;", "adss_server_ca.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;Microsoft&nbsp;CA&nbsp;", "microsoft_ca.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;Symantec&nbsp;MPKI&nbsp;", "symantec_mpki.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;GlobalSign&nbsp;EPKI&nbsp;", "globalsign_epki.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;GlobalSign&nbsp;HVCI&nbsp;", "globalsign_hvci.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;EJBCA&nbsp;", "ejbca.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;QuoVadis&nbsp;CA&nbsp;", "quovadis_ca.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;Entrust&nbsp;CA&nbsp;", "entrust_ca.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk(
    "R",
    "&nbsp;Offline&nbsp;External&nbsp;CA&nbsp;",
    "offline_external_ca.htm"
  )
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;DigiCert&nbsp;PKI&nbsp;", "digicert_pki.htm")
);
docAux = insDoc(
  xconfiguring_an_external_ca,
  gLnk("R", "&nbsp;SPOC&nbsp;Server&nbsp;", "spoc_server.htm")
);
docAux = insDoc(
  xmanage_cas,
  gLnk("R", "&nbsp;Local&nbsp;AAs&nbsp;", "configured_local_aas.htm")
);
docAux = insDoc(
  xmanage_cas,
  gLnk("R", "&nbsp;Local&nbsp;CVCAs&nbsp;", "local_cvca_s.htm")
);
docAux = insDoc(
  xmanage_cas,
  gLnk("R", "&nbsp;Local&nbsp;DVCAs&nbsp;", "local_dvca_sss.htm")
);
xmanual_certification = insFld(
  xmanage_cas,
  gFld("&nbsp;Manual&nbsp;Certification&nbsp;", "manual_certification.htm")
);
docAux = insDoc(
  xmanual_certification,
  gLnk("R", "&nbsp;X.509&nbsp;Certificates&nbsp;", "x_509_certificates.htm")
);
docAux = insDoc(
  xmanual_certification,
  gLnk("R", "&nbsp;CV&nbsp;Certificates&nbsp;", "cv_certificates.htm")
);
docAux = insDoc(
  xmanage_cas,
  gLnk(
    "R",
    "&nbsp;Certificate&nbsp;Templates&nbsp;",
    "certificate_templates.htm"
  )
);
docAux = insDoc(
  xmanage_cas,
  gLnk(
    "R",
    "&nbsp;CV&nbsp;Certificate&nbsp;Template&nbsp;",
    "cv_certificate_template1.htm"
  )
);
docAux = insDoc(xmanage_cas, gLnk("R", "&nbsp;Alerts&nbsp;", "alerts1.htm"));
xkey_manager6 = insFld(
  foldersTree,
  gFld("&nbsp;Key&nbsp;Manager&nbsp;", "key_manager6.htm")
);
xcrypto_processor_settings2 = insFld(
  xkey_manager6,
  gFld("&nbsp;Crypto&nbsp;Source&nbsp;", "crypto_processor_settings2.htm")
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk(
    "R",
    "&nbsp;PKCS#11&nbsp;Standard&nbsp;",
    "creating_a_new_hardware_crypto_profile.htm"
  )
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk(
    "R",
    "&nbsp;Utimaco&nbsp;CryptoServer&nbsp;CP5&nbsp;HSM&nbsp;",
    "qualified_hsm.htm"
  )
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk(
    "R",
    "&nbsp;Thales&nbsp;Luna&nbsp;K7&nbsp;Cryptographic&nbsp;Module&nbsp;",
    "thales_safenet_luna_hsm.htm"
  )
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk(
    "R",
    "&nbsp;nCipher&nbsp;nShield&nbsp;Solo&nbsp;XC&nbsp;Cryptographic&nbsp;Module&nbsp;",
    "ncipher_nshield_solo_x_cryptographic_module.htm"
  )
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk("R", "&nbsp;Azure&nbsp;Key&nbsp;Vault&nbsp;", "azure_key_vault.htm")
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk("R", "&nbsp;AWS&nbsp;CloudHSM&nbsp;", "aws_cloudhsm1.htm")
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk("R", "&nbsp;MS-CAPI/CNG&nbsp;", "ms_capi_cng.htm")
);
docAux = insDoc(
  xcrypto_processor_settings2,
  gLnk(
    "R",
    "&nbsp;Importing&nbsp;Existing&nbsp;Keys&nbsp;",
    "importing_existing_keys.htm"
  )
);
xkey_manager3 = insFld(
  xkey_manager6,
  gFld("&nbsp;Service&nbsp;Keys&nbsp;", "key_manager3.htm")
);
docAux = insDoc(
  xkey_manager3,
  gLnk(
    "R",
    "&nbsp;Creating&nbsp;New&nbsp;Keys&nbsp;",
    "generating_new_keys.htm"
  )
);
docAux = insDoc(
  xkey_manager3,
  gLnk("R", "&nbsp;Importing&nbsp;Keys&nbsp;", "importing_keys.htm")
);
xgenerating_certificates = insFld(
  xkey_manager3,
  gFld("&nbsp;Creating&nbsp;Certificates&nbsp;", "generating_certificates.htm")
);
docAux = insDoc(
  xgenerating_certificates,
  gLnk(
    "R",
    "&nbsp;Creating&nbsp;CSR/Certificates&nbsp;",
    "generating_pkcs_10_certificate_requests.htm"
  )
);
docAux = insDoc(
  xgenerating_certificates,
  gLnk(
    "R",
    "&nbsp;Importing&nbsp;Certificates&nbsp;",
    "importing_certificates.htm"
  )
);
docAux = insDoc(
  xgenerating_certificates,
  gLnk(
    "R",
    "&nbsp;Exporting&nbsp;Keys/&nbsp;Certificates&nbsp;",
    "exporting_keys_and_certificates.htm"
  )
);
docAux = insDoc(
  xgenerating_certificates,
  gLnk(
    "R",
    "&nbsp;Searching&nbsp;Certificates&nbsp;",
    "searching_for_certificates.htm"
  )
);
docAux = insDoc(
  xgenerating_certificates,
  gLnk(
    "R",
    "&nbsp;Rekey&nbsp;CSCA&nbsp;Certificates&nbsp;",
    "rekey_csca_certificates.htm"
  )
);
xcreating_cv_certificates = insFld(
  xkey_manager3,
  gFld(
    "&nbsp;Creating&nbsp;CV&nbsp;Certificates&nbsp;",
    "creating_cv_certificates.htm"
  )
);
docAux = insDoc(
  xcreating_cv_certificates,
  gLnk(
    "R",
    "&nbsp;Create&nbsp;CV&nbsp;Certificates&nbsp;",
    "create_cv_certificates.htm"
  )
);
docAux = insDoc(
  xcreating_cv_certificates,
  gLnk(
    "R",
    "&nbsp;Importing&nbsp;CV&nbsp;Certificates&nbsp;",
    "importing_cv_dv_certificates.htm"
  )
);
docAux = insDoc(
  xcreating_cv_certificates,
  gLnk(
    "R",
    "&nbsp;Change&nbsp;Sequence&nbsp;Number&nbsp;Algorithm&nbsp;",
    "change_sequence_number.htm"
  )
);
docAux = insDoc(
  xcreating_cv_certificates,
  gLnk("R", "&nbsp;Rekey&nbsp;Certificate&nbsp;", "rekey_certificate.htm")
);
docAux = insDoc(
  xcreating_cv_certificates,
  gLnk(
    "R",
    "&nbsp;Searching&nbsp;CV&nbsp;Certificates&nbsp;",
    "searching_cv_dv_certificates.htm"
  )
);
docAux = insDoc(
  xkey_manager3,
  gLnk("R", "&nbsp;Searching&nbsp;Keys&nbsp;", "searching_for_keys.htm")
);
docAux = insDoc(
  xkey_manager3,
  gLnk(
    "R",
    "&nbsp;5&nbsp;Ways&nbsp;to&nbsp;Create&nbsp;Certificates&nbsp;",
    "ways-to-create-certificates.htm"
  )
);
docAux = insDoc(
  xkey_manager6,
  gLnk("R", "&nbsp;Key&nbsp;Templates&nbsp;", "key_templates.htm")
);
docAux = insDoc(
  xkey_manager6,
  gLnk("R", "&nbsp;Certificate&nbsp;Groups&nbsp;", "certificate_group.htm")
);
docAux = insDoc(
  xkey_manager6,
  gLnk(
    "R",
    "&nbsp;Certificate&nbsp;Templates&nbsp;",
    "certificate_templates1.htm"
  )
);
docAux = insDoc(
  xkey_manager6,
  gLnk("R", "&nbsp;Certificate&nbsp;Purpose&nbsp;", "certificate_purpose.htm")
);
docAux = insDoc(
  xkey_manager6,
  gLnk(
    "R",
    "&nbsp;CV&nbsp;Certificate&nbsp;Template&nbsp;",
    "cv_certificate_template.htm"
  )
);
docAux = insDoc(
  xkey_manager6,
  gLnk(
    "R",
    "&nbsp;Auto&nbsp;Renew&nbsp;Certificates&nbsp;",
    "auto_renew_certificates.htm"
  )
);
docAux = insDoc(
  xkey_manager6,
  gLnk("R", "&nbsp;Default&nbsp;DName&nbsp;", "default_distinguished_name.htm")
);
docAux = insDoc(xkey_manager6, gLnk("R", "&nbsp;Alerts&nbsp;", "alerts3.htm"));
xtrust_manager3 = insFld(
  foldersTree,
  gFld("&nbsp;Trust&nbsp;Manager&nbsp;", "trust_manager3.htm")
);
xx_509_certificates1 = insFld(
  xtrust_manager3,
  gFld("&nbsp;X.509&nbsp;Certificates&nbsp;", "x_509_certificates1.htm")
);
docAux = insDoc(
  xx_509_certificates1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;1&nbsp;-&nbsp;Identifying&nbsp;the&nbsp;TA&nbsp;",
    "step_1___identifying_the_ta.htm"
  )
);
docAux = insDoc(
  xx_509_certificates1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;2&nbsp;-&nbsp;Validation&nbsp;Policy&nbsp;",
    "step_2_-_validation_policy.htm"
  )
);
docAux = insDoc(
  xx_509_certificates1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;3&nbsp;-&nbsp;CRL&nbsp;Settings&nbsp;",
    "step_3___configuring_crl_settings.htm"
  )
);
docAux = insDoc(
  xx_509_certificates1,
  gLnk(
    "R",
    "&nbsp;Step&nbsp;4&nbsp;-&nbsp;Advanced&nbsp;Settings&nbsp;",
    "step_4_-_advanced_settings.htm"
  )
);
docAux = insDoc(
  xtrust_manager3,
  gLnk("R", "&nbsp;Domestic&nbsp;CVCAs&nbsp;", "domestic_cvcas.htm")
);
docAux = insDoc(
  xtrust_manager3,
  gLnk("R", "&nbsp;Foreign&nbsp;CVCAs&nbsp;", "foreign_cvcas.htm")
);
xcrl_manager_service = insFld(
  foldersTree,
  gFld("&nbsp;ADSS&nbsp;CRL&nbsp;Monitor&nbsp;", "crl_manager_service.htm")
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk(
    "R",
    "&nbsp;CRL&nbsp;Monitor&nbsp;Key&nbsp;Features&nbsp;",
    "starting_the_crl_manager.htm"
  )
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk(
    "R",
    "&nbsp;CRL&nbsp;Storage&nbsp;within&nbsp;ADSS&nbsp;Server&nbsp;",
    "crl_storage_withing_adss_server.htm"
  )
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk(
    "R",
    "&nbsp;Proxy&nbsp;Settings&nbsp;and&nbsp;Digest&nbsp;Authentication&nbsp;",
    "proxy_settings_and_digest_authentication.htm"
  )
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk(
    "R",
    "&nbsp;Using&nbsp;the&nbsp;Service&nbsp;Manager&nbsp;",
    "using_crl_service_manager.htm"
  )
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk(
    "R",
    "&nbsp;High&nbsp;Availability&nbsp;for&nbsp;CRL&nbsp;Monitor&nbsp;",
    "high_availability_configurations.htm"
  )
);
xviewing_crl_details = insFld(
  xcrl_manager_service,
  gFld("&nbsp;Viewing&nbsp;CRL&nbsp;Details&nbsp;", "viewing_crl_details.htm")
);
docAux = insDoc(
  xviewing_crl_details,
  gLnk(
    "R",
    "&nbsp;Searching&nbsp;for&nbsp;CRLs&nbsp;",
    "searching_for_crls.htm"
  )
);
docAux = insDoc(
  xviewing_crl_details,
  gLnk(
    "R",
    "&nbsp;Viewing&nbsp;the&nbsp;Contents&nbsp;for&nbsp;a&nbsp;CRL&nbsp;",
    "viewing_the_contents_for_a_crl.htm"
  )
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk("R", "&nbsp;CRL&nbsp;Monitoring&nbsp;", "crl_monitor.htm")
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk("R", "&nbsp;Instant&nbsp;Revocation&nbsp;", "instant_revocation.htm")
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk("R", "&nbsp;CRL&nbsp;Logs&nbsp;", "reviewing_crl_log_records.htm")
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "crl_logs_archiving.htm")
);
docAux = insDoc(
  xcrl_manager_service,
  gLnk("R", "&nbsp;Alerts&nbsp;", "crl_manager_alerts.htm")
);
xcrl_manager_management_reporting = insFld(
  xcrl_manager_service,
  gFld(
    "&nbsp;Management&nbsp;Reporting&nbsp;",
    "crl_manager_management_reporting.htm"
  )
);
docAux = insDoc(
  xcrl_manager_management_reporting,
  gLnk("R", "&nbsp;Service&nbsp;Report&nbsp;", "service_report3.htm")
);
docAux = insDoc(
  xcrl_manager_management_reporting,
  gLnk("R", "&nbsp;Usage&nbsp;Report&nbsp;", "usage_report4.htm")
);
xglobal_settings = insFld(
  foldersTree,
  gFld("&nbsp;Global&nbsp;Settings&nbsp;", "global_settings.htm")
);
docAux = insDoc(
  xglobal_settings,
  gLnk("R", "&nbsp;System&nbsp;Certificates&nbsp;", "system_certificates.htm")
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;NTP&nbsp;Time&nbsp;Monitoring&nbsp;",
    "ntp_time_monitoring.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;Timestamping&nbsp;",
    "configuring_time_stamp_authorities_(tsa).htm"
  )
);
xconnectors = insFld(
  xglobal_settings,
  gFld("&nbsp;Connectors&nbsp;", "connectors.htm")
);
docAux = insDoc(xconnectors, gLnk("R", "&nbsp;SAML&nbsp;", "saml.htm"));
docAux = insDoc(
  xconnectors,
  gLnk("R", "&nbsp;OpenID&nbsp;Connect&nbsp;", "openid_connect.htm")
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;Real&nbsp;Time&nbsp;Revocation&nbsp;",
    "real_time_revocation2.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk("R", "&nbsp;Notification&nbsp;Settings&nbsp;", "alert_settings.htm")
);
docAux = insDoc(
  xglobal_settings,
  gLnk("R", "&nbsp;System&nbsp;Alerts&nbsp;", "system_alerts.htm")
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;High&nbsp;Availability&nbsp;",
    "high_availability_settings.htm"
  )
);
xsystem_integrity = insFld(
  xglobal_settings,
  gFld("&nbsp;System&nbsp;Security&nbsp;", "system_integrity.htm")
);
xrenew_master_key1 = insFld(
  xsystem_integrity,
  gFld("&nbsp;Renew&nbsp;Master&nbsp;Key&nbsp;", "renew_master_key1.htm")
);
docAux = insDoc(
  xrenew_master_key1,
  gLnk(
    "R",
    "&nbsp;Software&nbsp;Based&nbsp;Key&nbsp;-&nbsp;Auto&nbsp;Startup&nbsp;",
    "software_based_key___auto_startup1.htm"
  )
);
docAux = insDoc(
  xrenew_master_key1,
  gLnk(
    "R",
    "&nbsp;Software&nbsp;Based&nbsp;Key&nbsp;With&nbsp;M&nbsp;of&nbsp;N&nbsp;Controls&nbsp;-&nbsp;Manual&nbsp;Startup&nbsp;",
    "software_based_key_with_m_of_n_controls___manual_startup1.htm"
  )
);
docAux = insDoc(
  xrenew_master_key1,
  gLnk(
    "R",
    "&nbsp;Hardware&nbsp;Based&nbsp;Key&nbsp;-&nbsp;Manual&nbsp;Startup&nbsp;",
    "hardware_based_key___manual_startup1.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;Authentication&nbsp;Profiles&nbsp;",
    "authentication_profiles.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;Authorisation&nbsp;Profiles&nbsp;",
    "authorisation_profiles.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;Import/Export&nbsp;Settings&nbsp;",
    "import_export_settings.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk("R", "&nbsp;License&nbsp;Manager&nbsp;", "license_manager.htm")
);
xadvanced_settings4 = insFld(
  xglobal_settings,
  gFld("&nbsp;Advanced&nbsp;Settings&nbsp;", "advanced_settings4.htm")
);
xsystem_level_settings = insFld(
  xadvanced_settings4,
  gFld(
    "&nbsp;System&nbsp;Level&nbsp;Settings&nbsp;",
    "system_level_settings.htm"
  )
);
docAux = insDoc(
  xsystem_level_settings,
  gLnk("R", "&nbsp;General&nbsp;", "general.htm")
);
docAux = insDoc(
  xsystem_level_settings,
  gLnk("R", "&nbsp;Core&nbsp;Instance&nbsp;", "core.htm")
);
docAux = insDoc(
  xsystem_level_settings,
  gLnk("R", "&nbsp;Console&nbsp;Instance&nbsp;", "console.htm")
);
docAux = insDoc(
  xsystem_level_settings,
  gLnk("R", "&nbsp;Service&nbsp;Instance&nbsp;", "service.htm")
);
xservices_level_settings = insFld(
  xadvanced_settings4,
  gFld(
    "&nbsp;Services&nbsp;Level&nbsp;Settings&nbsp;",
    "services_level_settings.htm"
  )
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;Signing&nbsp;Service&nbsp;", "signing_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk(
    "R",
    "&nbsp;Verification&nbsp;Service&nbsp;",
    "verification_service1.htm"
  )
);
docAux = insDoc(
  xservices_level_settings,
  gLnk(
    "R",
    "&nbsp;Certification&nbsp;Service&nbsp;",
    "certification_service1.htm"
  )
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;OCSP&nbsp;Service&nbsp;", "ocsp_service2.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;OCSP&nbsp;Repeater&nbsp;", "ocsp_repeater.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;TSA&nbsp;Settings&nbsp;", "tsa_settings.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;XKMS&nbsp;Service&nbsp;", "xkms_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;SCVP&nbsp;Service&nbsp;", "scvp_service.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;LTANS&nbsp;Service&nbsp;", "ltans_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;Decryption&nbsp;Service&nbsp;", "decryption_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;OCSP&nbsp;Monitor&nbsp;", "ocsp_monitor1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;GoSign&nbsp;Service&nbsp;", "gosign_service.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;RA&nbsp;Service&nbsp;", "ra_service.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;CRL&nbsp;Monitor&nbsp;", "crl_monitor2.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;RAS&nbsp;Service&nbsp;", "ras_service.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;SAM&nbsp;Service&nbsp;", "sam_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;CSP&nbsp;Service&nbsp;", "csp_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;NPKD&nbsp;Service&nbsp;", "npkd_service1.htm")
);
docAux = insDoc(
  xservices_level_settings,
  gLnk("R", "&nbsp;SPOC&nbsp;Service&nbsp;", "spoc_service1.htm")
);
xother_settings = insFld(
  xadvanced_settings4,
  gFld("&nbsp;Other&nbsp;Settings&nbsp;", "other_settings.htm")
);
docAux = insDoc(
  xother_settings,
  gLnk("R", "&nbsp;Archiving&nbsp;", "archiving.htm")
);
docAux = insDoc(
  xadvanced_settings4,
  gLnk(
    "R",
    "&nbsp;Adding&nbsp;Custom&nbsp;Property&nbsp;",
    "adding_custom_property.htm"
  )
);
docAux = insDoc(
  xglobal_settings,
  gLnk(
    "R",
    "&nbsp;Miscellaneous&nbsp;Settings&nbsp;",
    "miscellaneous_settings.htm"
  )
);
xaccess_control2 = insFld(
  foldersTree,
  gFld("&nbsp;Access&nbsp;Control&nbsp;", "access_control2.htm")
);
docAux = insDoc(
  xaccess_control2,
  gLnk("R", "&nbsp;Operators&nbsp;", "managing_operator_accounts.htm")
);
xmanaging_system_roles = insFld(
  xaccess_control2,
  gFld("&nbsp;Roles&nbsp;", "managing_system_roles.htm")
);
docAux = insDoc(
  xmanaging_system_roles,
  gLnk(
    "R",
    "&nbsp;Creating&nbsp;New&nbsp;Roles&nbsp;",
    "creating_new_roles.htm"
  )
);
docAux = insDoc(
  xmanaging_system_roles,
  gLnk(
    "R",
    "&nbsp;Default&nbsp;System&nbsp;Roles&nbsp;",
    "default_system_roles.htm"
  )
);
xclient_manager = insFld(
  foldersTree,
  gFld("&nbsp;Client&nbsp;Manager&nbsp;", "client_manager.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk(
    "R",
    "&nbsp;Signing&nbsp;Service&nbsp;",
    "signing_service_configuration.htm"
  )
);
docAux = insDoc(
  xclient_manager,
  gLnk(
    "R",
    "&nbsp;Verification&nbsp;Service&nbsp;",
    "verification_service_configuration.htm"
  )
);
docAux = insDoc(
  xclient_manager,
  gLnk(
    "R",
    "&nbsp;Certification&nbsp;Service&nbsp;",
    "certification_service_configuration.htm"
  )
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;XKMS&nbsp;Service&nbsp;", "xkms_service_configuration.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;LTANS&nbsp;Service&nbsp;", "ltan_service_configurations.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk(
    "R",
    "&nbsp;Decryption&nbsp;Service&nbsp;",
    "decryption_service_configurations2.htm"
  )
);
docAux = insDoc(
  xclient_manager,
  gLnk(
    "R",
    "&nbsp;Go-Sign&nbsp;Service&nbsp;",
    "go-sign_service_configuration.htm"
  )
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;RA&nbsp;Service&nbsp;", "ra_service_configuration.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;RAS&nbsp;Service&nbsp;", "ars_service1.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;SAM&nbsp;Service&nbsp;", "sam_service.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;CSP&nbsp;Service&nbsp;", "csp_service.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;SPOC&nbsp;Service&nbsp;", "spoc_service.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;NPKD&nbsp;Service&nbsp;", "npkd_service.htm")
);
docAux = insDoc(
  xclient_manager,
  gLnk("R", "&nbsp;Advanced&nbsp;Settings&nbsp;", "advanced_settings5.htm")
);
xsystem_log_viewer = insFld(
  foldersTree,
  gFld("&nbsp;System&nbsp;Log&nbsp;Viewer&nbsp;", "system_log_viewer.htm")
);
docAux = insDoc(
  xsystem_log_viewer,
  gLnk("R", "&nbsp;Operational&nbsp;Logs&nbsp;", "operational_logs.htm")
);
docAux = insDoc(
  xsystem_log_viewer,
  gLnk("R", "&nbsp;Event&nbsp;Logs&nbsp;", "event_logs.htm")
);
docAux = insDoc(
  xsystem_log_viewer,
  gLnk("R", "&nbsp;Logs&nbsp;Archiving&nbsp;", "logs_archiving5.htm")
);
xservice_manager = insFld(
  foldersTree,
  gFld("&nbsp;Server&nbsp;Manager&nbsp;", "service_manager.htm")
);
docAux = insDoc(
  xservice_manager,
  gLnk(
    "R",
    "&nbsp;ADSS&nbsp;Server&nbsp;Instances&nbsp;",
    "controlling_services.htm"
  )
);
docAux = insDoc(
  xservice_manager,
  gLnk("R", "&nbsp;ADSS&nbsp;Services&nbsp;", "services.htm")
);
docAux = insDoc(
  xservice_manager,
  gLnk("R", "&nbsp;System&nbsp;Health&nbsp;", "system_health.htm")
);
xapproval_manager = insFld(
  foldersTree,
  gFld("&nbsp;Approval&nbsp;Manager&nbsp;", "approval_manager.htm")
);
docAux = insDoc(
  xapproval_manager,
  gLnk(
    "R",
    "&nbsp;Enabling&nbsp;Dual&nbsp;Control&nbsp;",
    "enabling_dual_control.htm"
  )
);
docAux = insDoc(
  xapproval_manager,
  gLnk(
    "R",
    "&nbsp;Using&nbsp;Approval&nbsp;Manager&nbsp;",
    "using_approval_manager.htm"
  )
);
xoperational_management = insFld(
  foldersTree,
  gFld("&nbsp;Operational&nbsp;Management&nbsp;", "operational_management.htm")
);
docAux = insDoc(
  xoperational_management,
  gLnk(
    "R",
    "&nbsp;Starting&nbsp;&&nbsp;Stopping&nbsp;ADSS&nbsp;Server&nbsp;",
    "basic_configuration.htm"
  )
);
docAux = insDoc(
  xoperational_management,
  gLnk(
    "R",
    "&nbsp;Accessing&nbsp;the&nbsp;ADSS&nbsp;Server&nbsp;Console&nbsp;",
    "logging_on_to_the_adss_server_console.htm"
  )
);
xadding_an_operator_to_adss_server1 = insFld(
  xoperational_management,
  gFld(
    "&nbsp;Adding&nbsp;an&nbsp;Operator&nbsp;to&nbsp;ADSS&nbsp;Server&nbsp;",
    "adding_an_operator_to_adss_server1.htm"
  )
);
docAux = insDoc(
  xadding_an_operator_to_adss_server1,
  gLnk(
    "R",
    "&nbsp;Generating&nbsp;a&nbsp;new&nbsp;Operator&nbsp;Certificate&nbsp;",
    "generating_new_operator_certificate1.htm"
  )
);
docAux = insDoc(
  xadding_an_operator_to_adss_server1,
  gLnk(
    "R",
    "&nbsp;Creating&nbsp;Operator&nbsp;Accounts&nbsp;&&nbsp;Enabling&nbsp;Dual&nbsp;Control&nbsp;",
    "creating_operator_accounts_and_enabling_dual_control.htm"
  )
);
docAux = insDoc(
  xadding_an_operator_to_adss_server1,
  gLnk(
    "R",
    "&nbsp;Set-up&nbsp;Emergency&nbsp;Use&nbsp;Admin&nbsp;Accounts&nbsp;",
    "setting_up_emergency_use_smart_cards_upon_administrator_lock-out.htm"
  )
);
docAux = insDoc(
  xoperational_management,
  gLnk("R", "&nbsp;Managing&nbsp;Backups&nbsp;", "managing_backups.htm")
);
xmanaging_disk_space = insFld(
  xoperational_management,
  gFld("&nbsp;Managing&nbsp;Disk&nbsp;Space&nbsp;", "managing_disk_space.htm")
);
docAux = insDoc(
  xmanaging_disk_space,
  gLnk("R", "&nbsp;Trace&nbsp;Logs&nbsp;", "trace_log.htm")
);
docAux = insDoc(
  xmanaging_disk_space,
  gLnk("R", "&nbsp;Database&nbsp;", "database.htm")
);
docAux = insDoc(
  xoperational_management,
  gLnk(
    "R",
    "&nbsp;Upgrading&nbsp;ADSS&nbsp;Server&nbsp;",
    "auto_upgrading_adss_server.htm"
  )
);
docAux = insDoc(
  xoperational_management,
  gLnk(
    "R",
    "&nbsp;Checking&nbsp;PKCS11&nbsp;HSM&nbsp;Functionality&nbsp;&nbsp;",
    "running_the_hardware_crypto_source_test_utility.htm"
  )
);
docAux = insDoc(
  xoperational_management,
  gLnk(
    "R",
    "&nbsp;Trace&nbsp;Logs&nbsp;Export&nbsp;Utility&nbsp;",
    "trace_logs_export_utility.htm"
  )
);
xadvanced_configuration = insFld(
  foldersTree,
  gFld("&nbsp;Cấu hình&nbsp;nâng cao&nbsp;", "pages/advanced_configuration.htm")
);
xadss_server_logging = insFld(
  xadvanced_configuration,
  gFld(
    "&nbsp;Đăng ký&nbsp;Dịch vụ&nbsp;ADSS&nbsp;",
    "pages/adss_server_logging.htm"
  )
);
docAux = insDoc(
  xadss_server_logging,
  gLnk(
    "R",
    "&nbsp;Managing&nbsp;ADSS&nbsp;Server&nbsp;Logs&nbsp;",
    "managing_adss_server_logs.htm"
  )
);
xlocalization = insFld(
  xadvanced_configuration,
  gFld("&nbsp;Localisation&nbsp;", "localization.htm")
);
xchanging_notification__alerts__messages = insFld(
  xlocalization,
  gFld(
    "&nbsp;Changing&nbsp;Notification&nbsp;(Alert)&nbsp;Messages&nbsp;",
    "changing_notification_(alerts)_messages.htm"
  )
);
docAux = insDoc(
  xchanging_notification__alerts__messages,
  gLnk("R", "&nbsp;Email&nbsp;Notifications&nbsp;", "email_notifications.htm")
);
docAux = insDoc(
  xchanging_notification__alerts__messages,
  gLnk("R", "&nbsp;SMS&nbsp;Notifications&nbsp;", "sms_notifications.htm")
);
docAux = insDoc(
  xchanging_notification__alerts__messages,
  gLnk("R", "&nbsp;SNMP&nbsp;Notifications&nbsp;", "snmp_notifications.htm")
);
docAux = insDoc(
  xchanging_notification__alerts__messages,
  gLnk("R", "&nbsp;Syslog&nbsp;Notifications&nbsp;", "syslog_notifications.htm")
);
docAux = insDoc(
  xlocalization,
  gLnk(
    "R",
    "&nbsp;Changing&nbsp;System&nbsp;Messages&nbsp;",
    "changing_system_messages.htm"
  )
);
docAux = insDoc(
  xlocalization,
  gLnk(
    "R",
    "&nbsp;Replacing&nbsp;the&nbsp;ADSS&nbsp;Server&nbsp;Welcome&nbsp;Page&nbsp;",
    "replacing_adss_welcome_page.htm"
  )
);
docAux = insDoc(
  xadvanced_configuration,
  gLnk(
    "R",
    "&nbsp;ADSS&nbsp;Service&nbsp;Interface&nbsp;Error&nbsp;Codes&nbsp;",
    "error_codes.htm"
  )
);
docAux = insDoc(
  xadvanced_configuration,
  gLnk(
    "R",
    "&nbsp;Changing&nbsp;ADSS&nbsp;Default&nbsp;&nbsp;Service&nbsp;URL&nbsp;",
    "changing_adss_default__service_url.htm"
  )
);
docAux = insDoc(
  xadvanced_configuration,
  gLnk(
    "R",
    "&nbsp;Configuring&nbsp;Tomcat&nbsp;for&nbsp;TLS&nbsp;Authentication&nbsp;Using&nbsp;HSM&nbsp;Devices&nbsp;",
    "configuring_tomcat_for_ssl_authentication_using_hsm_devices.htm"
  )
);
